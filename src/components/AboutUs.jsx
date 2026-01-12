import { Branding } from "../assets"
import AnimationSettings from "../animations/AnimationSettings"

export default function AboutUs(){

    return(<>

        <h2 className="h1 font-bold my-10">Sobre nosotros</h2>

    <main className="flex h-auto md-h-dvh   mx-auto bg-blue-100 text-cyan-950 relative" >
        <img src={Branding.logo} alt="" className="absolute w-25 h-20  md:w-60 md:h-50 right-0" />
        <section className="flex flex-col w-auto md:w-[65dvw] mx-auto text-center   md:border-l text-wrap h-auto my-30 px-10">
            {/* title main with animations */}
            <AnimationSettings type="fade" duration=".8s" direction="right">
                <h2 className="h2 my-4">Quienes somos</h2>
            </AnimationSettings>
            {/* text main */}
            <AnimationSettings type="fade" duration=".8s" direction="right" className="w-auto text-red-400">
                     
            <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio fugit, tempore animi fugiat nesciunt molestiae maxime praesentium inventore repudiandae sapiente dolorem dignissimos vero nihil, neque sit maiores vel velit?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolore voluptatum rerum, soluta placeat unde aliquid tempore quis odio. Molestiae quaerat repellat tempora possimus expedita doloremque corporis amet! Itaque, debitis!
            </p>
            </AnimationSettings>
            {/* title main with animations */}
            <AnimationSettings type="fade" duration=".8s" direction="right">
                <h2 className="h2 my-4">Mision</h2>
            </AnimationSettings>
            {/* text main */}
            <AnimationSettings type="fade" duration=".8s" direction="right">
                     
            <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio fugit, tempore animi fugiat nesciunt molestiae maxime praesentium inventore repudiandae sapiente dolorem dignissimos vero nihil, neque sit maiores vel velit?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolore voluptatum rerum, soluta placeat unde aliquid tempore quis odio. Molestiae quaerat repellat tempora possimus expedita doloremque corporis amet! Itaque, debitis!
            </p>
            </AnimationSettings>
            {/* title main with animations */}
            <AnimationSettings type="fade" duration=".8s" direction="right">
                <h2 className="h2 my-4">Vision</h2>
            </AnimationSettings>
            {/* text main */}
            <AnimationSettings type="fade" duration=".8s" direction="right">
                     
            <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odio fugit, tempore animi fugiat nesciunt molestiae maxime praesentium inventore repudiandae sapiente dolorem dignissimos vero nihil, neque sit maiores vel velit?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure dolore voluptatum rerum, soluta placeat unde aliquid tempore quis odio. Molestiae quaerat repellat tempora possimus expedita doloremque corporis amet! Itaque, debitis!
            </p>
            </AnimationSettings>
      
        </section>
    </main>

    </>)
}