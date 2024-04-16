import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { connectAuthEmulator, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, type User } from 'firebase/auth';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { writable, type Readable, derived } from 'svelte/store';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyCALLWsYW2R0tS_sJ-b3cJLIl8b8NRRECs",
    authDomain: "song-sense.firebaseapp.com",
    projectId: "song-sense",
    storageBucket: "song-sense.appspot.com",
    messagingSenderId: "384593755209",
    appId: "1:384593755209:web:bea5d017822b11c3739398",
    measurementId: "G-08WQ7MJZ1P"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
connectFirestoreEmulator(db, '127.0.0.1', 8080);
export const auth = getAuth();
// connectAuthEmulator(auth, "http://127.0.0.1:9099");
export const storage = getStorage();
// connectStorageEmulator(storage, "localhost", 9199);


export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider);
    console.log(user)
}

export async function logout() {
    try {
        await signOut(auth)
        console.log('User logged out')
    }
    catch (error: any) {
        console.error('Error logging out', error)
    }
}

export const signInWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log('User created', user)
    }
    catch (error: any) {
        console.error('Error creating user', error)
    }
}

export const loginWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        console.log('User logged in', user)
    }
    catch (error: any) {
        console.error('Error logging in', error)
    }
}

/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void;
  
    if (!auth || !globalThis.window) {
      console.warn('Auth is not initialized or not in browser');
      const { subscribe } = writable<User | null>(null);
      return {
        subscribe,
      }
    }
    
    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        set(user);
      });
  
      return () => unsubscribe();
    });
  
    return {
      subscribe,
    };
  }
  
export const user = userStore();


  /**
 * @param  {string} path document path or reference
 * @returns a store with realtime updates on document data
 */
export function docStore<T>(
    path: string,
  ) {
    let unsubscribe: () => void;
  
    const docRef = doc(db, path);
  
    const { subscribe } = writable<T | null>(null, (set) => {
      unsubscribe = onSnapshot(docRef, (snapshot) => {
        set((snapshot.data() as T) ?? null);
      });
  
      return () => unsubscribe();
    });
  
    return {
      subscribe,
      ref: docRef,
      id: docRef.id,
    };
  }


  interface UserData {
    username: string;
    bio: string;
    photoURL: string;
    published: boolean;
    links: any[];
  }
  
  export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
    if ($user) {
      return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
    } else {
      set(null); 
    }
  });  

export const functions = getFunctions();
connectFunctionsEmulator(functions, "127.0.0.1", 5001);