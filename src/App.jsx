import { useState, useEffect } from 'react'
import { db } from './database/db'
import Header from './components/Header'
import DarkMode from './components/DarkMode'
import FormCat from './components/formCat'
import CatList from './components/CatList'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Direccion from './components/Direccion'
import Footer from './components/Footer'
import './App.css'

function App() {
  const[data, setData]= useState([]);

  const[option, setOption]=useState("home");

  const setOptions = (e)=>{
    setOption(e);
  }
   useEffect(() => {
    const loadData = async () => {
      const allCats = await db.cats.toArray();
      setData(allCats);
    };
    loadData();
  }, []);

  
 const saveCats = async (catData) => {
    const id = await db.cats.add(catData); 
     
    
    const dataCat = await db.cats.toArray();
    setData(dataCat);
};


  return (
    <>
    <Header changeOption={setOptions}></Header>

    {option ==="admingatos" && (<>
    <div className='flex gap-2 mt-15'>
      <FormCat saveCat={saveCats}></FormCat>
      <CatList catData={data}></CatList>
      
    </div>
    </>)}

    {option === "home" && (<>
      <Home></Home>
      <AboutUs></AboutUs>
      <Direccion></Direccion>
      <Footer></Footer>
    </>)}
      
    
    
    {option === "addcats" && (
      <>
      <FormCat saveCat={saveCats}></FormCat>
    </>
    ) }
    
       {option === "viewList" && (<div className='  h-auto w-full md:hidden'>
          <CatList catData={data}></CatList>
    </div>) }
    


    <DarkMode></DarkMode>


    </>
  )
}

export default App
