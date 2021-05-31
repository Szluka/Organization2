import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private afAuth: AngularFireAuth) { }

    async logout(): Promise<void> {
        await this.afAuth.signOut();
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    currentUserObservable(): any {
        return this.afAuth.authState;
    }

    authenticated(): boolean {
        return this.afAuth.authState !== null;
    }
}