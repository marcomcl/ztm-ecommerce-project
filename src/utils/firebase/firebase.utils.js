import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqYDkB98DegF9uwXGgh_pTYN-IgGR-cl4",
    authDomain: "ztm-ecommerce-project.firebaseapp.com",
    projectId: "ztm-ecommerce-project",
    storageBucket: "ztm-ecommerce-project.appspot.com",
    messagingSenderId: "723326945321",
    appId: "1:723326945321:web:4abc627c1bdc225660b438"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider);