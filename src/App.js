import './App.css';
import {useState,useEffect} from "react" ;
import Sidebar from './Components/Sidebar/Sidebar.js'
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Pdf from './Components/Pdf/Pdf.js';
import firebase from 'firebase';
import db from './firebase.js';
import storage from './firebase.js'

function App() {

  useEffect(()=>{
    db.collection('subjects').onSnapshot(snapshot=>{
      setSubjects(snapshot.docs.map(doc=>(doc.id)))
    })
  },[])

  useEffect(()=>{
    db.collection('subjects').onSnapshot(snapshot=>{
      setFiles(snapshot.docs.map(doc=>(doc.data())))
    })
  },[])

  const[subjects,setSubjects] = useState([]);
  const[files,setFiles]=useState([]);

  return (
    <div className="App">
    
      <div className="test">
        <Header/>

        <Sidebar subjects={subjects} />

        <Pdf files={files} subjects={subjects} />

        <div id="shift" />
        <Footer />
      
      </div>  

    </div>
  );
}

export default App;
