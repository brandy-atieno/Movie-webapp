import React,{useEffect} from 'react';
import './App.css';

const API_URL='http://www.omdbapi.com/?apikey=';

 const App = () => {
    const searchMovies= async (title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        console.log(data);


    };
    useEffect(()=>{
searchMovies('scream');
    },[]);
  return (
    <div>
        <h1>App</h1>
        </div>
  )
}
export default App
