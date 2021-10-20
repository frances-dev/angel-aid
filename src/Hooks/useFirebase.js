import { useEffect, useState } from "react"
import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";

initializeAuth();
const useFirebase = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 7) {
            setError('Password must be of 8 characters.')
            return;
        }
        if (!/(?=.*?[A-Z])(?=.*?[a-z])/.test(password)) {
            setError('Password must have at least 1 Uppercase.')
            return;
        }
        if (!/(?=.*?[0-9])/.test(password)) {
            setError('Password must have at least 1 number digit.')
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        name,
        user,
        error,
        isLogin,
        setUser,
        setError,
        handleRegistration,
        logOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handlePasswordReset,
        signInWithGoogle,
        signInWithGithub
    }
}

export default useFirebase;