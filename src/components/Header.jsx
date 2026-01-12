import { useState } from "react"

export default function Header({changeOption}){
    const[open, setOpen]=useState(false);
    
return(<>
<header className="flex fixed h-15 items-center justify-between shadow-xl bg-base w-full z-10">
<div className="logo flex overflow-hidden w-40 h-full ml-10">
    <img src="/images/logo.png" alt="#" className="w-full h-full object-cover" />
</div>

<h2 className="h2">Clinica de Gatos</h2>

<nav className="hidden md:flex items-center gap-10 h-full w-auto justify-between mr-5">
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current" onClick={()=>changeOption("home")}>Inicio</button>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current" onClick={()=>changeOption("admingatos")}>Administrar Gatos</button>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current">Informes</button>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current">Sobre nosotros</button>
</nav>

{/* android controller */}
<button className="Menu sm:hidden mr-5" onClick={()=>setOpen(o=>!o)}>Menu |||</button>


<nav  className={`md:hidden flex flex-col bg-base items-center gap-10 h-auto p-5  w-full justify-between mr-5 mx-auto top-full left-0 absolute z-50 transition-all duration-300 ease-out
 ${open ? "opacity-100 translate-y-0 pointer-events-auto" :"opacity-0 -translate-x-5 pointer-events-none"}`}>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current" onClick={()=>changeOption("home")}>Inicio</button>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current" onClick={()=>changeOption("viewList")}>Lista de Gatos</button>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current" onClick={()=>changeOption("addcats")}>Añadir nuevo gato</button>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current">Informes</button>
    <button className="h-full transition duration-500 ease-in hover:border-b hover:border-current">Sobre nosotros</button>
</nav>



</header>



</>)

}