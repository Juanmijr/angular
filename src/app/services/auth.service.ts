import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

  registerUser(){

  }
  loginEmailUser(email: string, pass: string){
return new Promise((resolve, reject)=>{
  this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
.then( userData => resolve(userData),
err=>reject(err));
});
  }
  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup( new auth.GoogleAuthProvider);
  }
  logoutUser(){
return this.afsAuth.auth.signOut();
  }

}
