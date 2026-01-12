
import { BsWhatsapp } from "react-icons/bs"

export default function Footer(){
    return(<>
    
    <footer className=" flex w-full h-auto bg-base">
        {/* COlumnas de inf */}
        <div className="grid grid-cols-1 mx-auto  md:grid-cols-3 p-5  ">
            <div>Direccion Calle <b>calle 24 4c 5- 12</b> </div>
                {/* copy rights text */}
            <div>Todos los derechos recervados C 2026-2028</div>

            <div className="flex justify-center items-center gap-2">
                <p>redes sociales</p>
                <BsWhatsapp></BsWhatsapp>
           </div>

            <div>Gracias por todo</div>
        </div>
        
    </footer> 
    </>)
}