import logo from './logo.svg';
import './App.css';

// import firebase from 'firebase/app';
// import 'firebase/firestore';

// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   apiKey: "AIzaSyDjlegrZ8Z87TZr_xqApYq040In9Mfa64E",
//   authDomain: "huff-website.firebaseapp.com",
//   projectId: "huff-website",
//   storageBucket: "huff-website.appspot.com",
//   messagingSenderId: "195585843969",
//   appId: "1:195585843969:web:ede1c0e5dc262bd399b100"
// })

// const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
