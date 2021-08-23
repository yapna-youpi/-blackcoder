import app from 'firebase/app'

const Config = {
    apiKey: "AIzaSyBIxxgKKeQKz9CANkye4GDdSlRpQwAoZCc",
    authDomain: "blackcoder-95f2c.firebaseapp.com",
    projectId: "blackcoder-95f2c",
    storageBucket: "blackcoder-95f2c.appspot.com",
    messagingSenderId: "335075623428",
    appId: "1:335075623428:web:882e0cb2f7901633daeb51"
  };

class Firebase{
    constructor (){ 
        super();
        app.initializeApp(Config);
    }
}

export default Firebase;