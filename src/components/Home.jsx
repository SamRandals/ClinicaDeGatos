

export default function Home(){
    return(<>
    
        <main className="md:w-220 md:m-auto">
            <section className="p2 m-2">
                <h1 className="h1 my-10">Hola bienvenido a la Clinica de gatos!</h1>
                <p className="p">Este software permite a los veterinarios de gatos tener un registro sobre la salud del felino, crear informes, dar de altas, y estructurar de manera eficiente a los gatitos!</p>
            </section>
            <section className="bg-base">
                <div className="w-full h-120 md:h-dvh">
                    <img src="https://purina.com.co/sites/default/files/2025-05/razas-de-gatos.jpg" alt=""  className="w-full h-full"/>
                </div>

               <div className="p-2 m-2">
                 <h3 className="h3 my-4">Sobre nosotros</h3>
                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium cupiditate necessitatibus voluptate, beatae odio neque quaerat eligendi similique enim earum fuga qui? Quis voluptates deleniti temporibus sunt voluptas provident.</p>
               </div>

            </section>
            <section className="bg-base">
                <h3 className="h3 mb-4">Proposito</h3>
                <p className="p">Queremos ayudara los veterinarios a tener un mejor contorl sobre la vida de un felino con problemas de salud, donde podra verficiar cada uno de sus gatos registrados en el resinto/veterinario para un buen control de cada uno de estos gatos.
                Podra verificar que enfermedades tiene, que diagnostico se hizo y si esta apto para dar de alta o no.
                Tambien podra modificar si algun gato esta con problemas de salud graves y requiere de una atencion inmediata con alertas personalizadas 

                </p>
            </section>

        </main>

    </>)
}