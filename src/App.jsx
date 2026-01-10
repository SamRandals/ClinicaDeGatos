import { useState } from 'react'
import { db } from './database/db'
import Header from './components/Header'
import DarkMode from './components/DarkMode'
import FormCat from './components/formCat'
import CatList from './components/CatList'
import Home from './components/Home'
import './App.css'

function App() {
  const[data, setData]= useState([]);

  const[option, setOption]=useState("home");

  const setOptions = (e)=>{
    setOption(e);
  }

  
   const saveCats = async (catData) => {
    const id = await db.cats.add(catData);   
    setData([...data, { ...catData, id }]);  
};



  return (
    <>
    <Header changeOption={setOptions}></Header>

    {option ==="admingatos" && (<>
    <div className='flex gap-2'>
      <FormCat saveCat={saveCats}></FormCat>
      <CatList catData={data}></CatList>
    </div>
    </>)}

    {option === "home" && (<>
      <Home></Home>
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
