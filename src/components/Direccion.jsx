import { Branding } from "../assets"

import AnimationSettings from "../animations/AnimationSettings"
export default function Direccion(){

    return(<>
    
    <main className="h-auto">

        <h2 className="h2 my-5">Donde encontrarnos</h2>
        <div className="grid grid-rows-2 md:grid-cols-2 gap-4 mx-10">
            {/* info */}
            <div className="text-balance">
                <h3 className="h3 my-4">Direccion</h3>
                <p>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iusto similique quam optio porro incidunt maxime velit, consequatur doloremque deserunt nesciunt illum unde expedita laboriosam amet neque doloribus. Ex, voluptatibus.</p>
                <p>Dirección calle 24 4c 5- 12</p>
                <h3 className="h3 my-4">Edificio</h3>
                    <p>Nos encontramos en el piso 3, puede subir en las escaleras y buscar nuestros letretos "Clinica de Gatos" donde ofrecemos nuestros servicios</p>
                    <p>Gracias por contar con nosotro!</p>
            </div>
            
            {/* image */}
            <AnimationSettings type="fade" direction="right" duration=".8s">
            <div className="h-auto overflow-hidden">
                <img src={Branding.edificio1} alt="" className="h-full object-cover" />
            </div>
            </AnimationSettings>
        </div>
    </main>

    </>)
}