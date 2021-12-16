import { ErrorService } from './error.service';
import { LoginData } from '../login/login-data';
import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SignupData } from '../signup/signup-data';
import { Router } from '@angular/router';
import { FirebaseError } from '@firebase/util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private errorService: ErrorService
  ) {
    this.auth.authState.subscribe((user) => (this.userData = user));
  }

  userData: any;

  get user() {
    return this.auth.user;
  }

  errorEmitter = new EventEmitter<string>();

  signup({ email, password, birthdate, fullname }: SignupData) {
    this.auth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        this.sendEmailVerification(res.user);
        res.user?.updateProfile({ displayName: fullname });
        this.db
          .collection('users')
          .doc(res.user?.uid)
          .set({ birthdate, fullname });

        this.router.navigate(['/']);
      },
      (err) => this.emitError(err.code)
    );
  }

  login({ email, password }: LoginData) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        this.sendEmailVerification(res.user);
        this.router.navigate(['/']);
      },
      (err: FirebaseError) => this.emitError(err.code)
    );
  }

  logout() {
    this.auth.signOut();
  }

  emitError(code: string) {
    this.errorEmitter.emit(this.errorService.formatError(code));
  }

  sendEmailVerification(user: any) {
    if (!user?.user?.emailVerified) {
      user?.sendEmailVerification();
    }
  }
}
