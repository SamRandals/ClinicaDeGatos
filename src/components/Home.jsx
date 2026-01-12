import AnimationSettings from "../animations/AnimationSettings"
import { Veterinarios, Branding } from "../assets"

export default function Home(){
    return(<>
    

    <main className="h-auto   bg-dark shadow-md mx-auto">

        <div className="flex relative w-full h-dvh items-center">

            <h2 className="startTitle flex text-6xl md:text-8xl absolute  mx-auto font-bold">Veterinaria Osfort</h2>

            <img src={Branding.portadaCat} alt="Logo"  className="w-full h-full object-cover object-top"/>
        </div>

        

    </main>

    <section className="flex flex-col  md:w-[65dvw] mx-auto bg-base">
        <h2 className="text-4xl my-4">Veterinarios</h2>
        <h3 className="text-3xl my-2">Hacemos lo mejor para los mejores</h3>
        <h4 className="text-md mb-10">Tus mascotas son lo mas importante, por eso nos comprometemos a cuidarlos.</h4>
        <div className="grid grid-cols-2 items-center text-sm p-2 md:text-lg">
            {/* divid items */}
            <AnimationSettings type="fade-in" direction="right" duration=".8s">
              <div className="flex flex-col items-center justify-center border-r">
                 <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam at odit exercitationem itaque, nam nihil reiciendis impedit assumenda sint sapiente recusandae quia libero quam? Mollitia quis quia  architecto et laboriosam.</h2>
              </div>
            </AnimationSettings>
            <AnimationSettings type="fade-in" direction="right" duration=".5s">
                <div className="flex  w-25 h-25 md:w-50 md:h-50 overflow-hidden mx-auto rounded-full">
                    <img src={Veterinarios.veterinario1} alt="" className="w-full h-full object-cover" />
                </div>
            </AnimationSettings>
            {/* divid items */}
            
             {/* divid items */}
            <AnimationSettings type="fade-in" direction="right" duration=".8s">
               <div className="flex w-25 h-25 md:w-50 md:h-50 overflow-hidden mx-auto rounded-full">
                    <img src={Veterinarios.veterinario2} alt="" className="w-full h-full object-cover" />
                </div>
            </AnimationSettings>
            <AnimationSettings type="fade-in" direction="right" duration=".5s">
               
                <div className="flex flex-col items-center justify-center border-l">
                 <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam at odit exercitationem itaque, nam nihil reiciendis impedit assumenda sint sapiente recusandae quia libero quam? Mollitia quis quia  architecto et laboriosam.</h2>
              </div>
            </AnimationSettings>
            {/* divid items */}

             {/* divid items */}
            <AnimationSettings type="fade-in" direction="right" duration=".8s">
              <div className="flex flex-col items-center justify-center border-r">
                 <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam at odit exercitationem itaque, nam nihil reiciendis impedit assumenda sint sapiente recusandae quia libero quam? Mollitia quis quia  architecto et laboriosam.</h2>
              </div>
            </AnimationSettings>
            <AnimationSettings type="fade-in" direction="right" duration=".5s">
                <div className="flex  w-25 h-25 md:w-50 md:h-50 overflow-hidden mx-auto rounded-full">
                    <img src={Veterinarios.veterinario3} alt="" className="w-full h-full object-cover" />
                </div>
            </AnimationSettings>
            {/* divid items */}
             {/* divid items */}
            <AnimationSettings type="fade-in" direction="right" duration=".8s">
               <div className="flex  w-25 h-25 md:w-50 md:h-50 overflow-hidden mx-auto rounded-full">
                    <img src={Veterinarios.veterinario4} alt="" className="w-full h-full object-cover" />
                </div>
            </AnimationSettings>
            <AnimationSettings type="fade-in" direction="right" duration=".5s">
              
                 <div className="flex flex-col items-center justify-center border-l">
                 <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam at odit exercitationem itaque, nam nihil reiciendis impedit assumenda sint sapiente recusandae quia libero quam? Mollitia quis quia  architecto et laboriosam.</h2>
              </div>
            </AnimationSettings>
            {/* divid items */}
             {/* divid items */}
            <AnimationSettings type="fade-in" direction="right" duration=".8s">
              <div className="flex flex-col items-center justify-center border-r">
                 <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam at odit exercitationem itaque, nam nihil reiciendis impedit assumenda sint sapiente recusandae quia libero quam? Mollitia quis quia  architecto et laboriosam.</h2>
              </div>
            </AnimationSettings>
            <AnimationSettings type="fade-in" direction="right" duration=".5s">
                <div className="flex w-25 h-25 md:w-50 md:h-50 overflow-hidden mx-auto rounded-full">
                    <img src={Veterinarios.veterinario5} alt="" className="w-full h-full object-cover" />
                </div>
            </AnimationSettings>
            {/* divid items */}
             
        </div>    
    </section>
    </>)
}