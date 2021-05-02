import React from "react";
import './App.css';
import Header from "./Header";
import Input from "./Input";
import Image from "./Image";

function App() {
  return (
    <div className="body">
     <Header/>
     <Image/>
     <label for="title" style={{color: "white", fontSize:20, textAlign: "center", fontFamily: "Arial",}}>Cheep Away! : </label>
     <Input/>
     <button>Submit</button>
    </div>
  );
}

export default App;
