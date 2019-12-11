import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
import { User } from './user';
import { ToastrService } from 'ngx-toastr';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usersCollection: AngularFirestoreCollection<User>;
  public user: firebase.User;
  public userFromDb: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private toastrService: ToastrService) {
    this.afAuth.auth.onAuthStateChanged((user) => {
          console.log('user is logged', user);
          if (user) {
              this.user = user;
              this.getUserByEmail(user.email);
          }
    });
  }

  public login(login: string, password: string): Promise<firebase.auth.UserCredential> {

    return this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then((data) => {
        return this.afAuth.auth.signInWithEmailAndPassword(login, password);
    });
  }

  public signUp(login: string, password: string, name: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(login, password);

  }
  public addUser(data: any, uid: string): Promise<any> {
    this.usersCollection = this.afs.collection<User>('users');
    return this.usersCollection.doc(uid).set(data);
  }

  public logOut() {
    return this.afAuth.auth.signOut();
  }

  public getAuth() {
    return  this.afAuth.authState;
  }
  get authenticated(): boolean {
    return !!this.user;
  }

  public getUserByEmail(email: string) {
    this.afs.collection('users', ref => ref.where('email', '==', email))
    .get()
    .subscribe((query) => {
      console.log(query);

      query.forEach((doc: DocumentSnapshot<User>) => {

      this.userFromDb.next(doc.data());

      });
    });
  }

  public updateUser(data: User) {
    console.log('hello update user', data);
    return this.afs.collection('users', ref => ref.where('email', '==', data.email)).doc(this.user.uid).update(data);

  }
}
