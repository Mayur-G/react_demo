// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import './App.css';
// const apidata = "https://fakestoreapi.com/products";

// const App = () => {
//   const[title,setTitle] = useState([]);
//   const[image,setImage] = useState([]);
//   const[description,setDescription] = useState([]);

//   useEffect(() => {
//     async function getStoreData()
//     {
//       //`${apidata}/5`  `` backtick 
//       const response = await axios.get(`${apidata}/4`);
//       setTitle(response.data.title);
//       setImage(response.data.image);
//       setDescription(response.data.description);
//     }

//     getStoreData();
//   },[]);
//   return (
//     <div className="product">
//       <h2>{title}</h2>
//       <img src={image} alt="" width={400} height={400} />
//       <p>{description}</p>
//     </div>
//   )
// }


// export default App

// ***************** React Router *********************

import {BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import NoPage from './components/NoPage'

export default function App(){
  return(
    <div>
        <BrowserRouter>
          <Routes>
              <Route index element={<Home/>} />
              <Route path="/home" element ={<Home/>} />
              <Route path="/about" element ={<About/>} />
              <Route path="/header" element ={<Header/>} />
              <Route path="*" element ={<NoPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}