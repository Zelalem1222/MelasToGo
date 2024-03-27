import firebase from 'firebase/app';
import { FIREBASE_AUTH } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = (email , password) => {
  const auth = FIREBASE_AUTH;
  signInWithEmailAndPassword(auth , email , password);
}