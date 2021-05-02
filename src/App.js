import './App.css';
import {useState,useEffect} from "react" ;
import Sidebar from './Components/Sidebar/Sidebar.js'
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Pdf from './Components/Pdf/Pdf.js';
import firebase from 'firebase';
import db from './firebase.js';

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

  console.log(files);
  
  const[input,setInput] = useState("");

  const[active,setActive] = useState(6)

  return (
    <div className="App">
    
      <div className="test">
        <Header/>

        <Sidebar subjects={subjects} active={active} />

        <Pdf files={files} active={active} subjects={subjects} />

        <Footer />
      
      </div>  

    </div>
  );
}

export default App;
