import { useState } from "react";

export default function FormCat({ saveCat }) {

    const [formData, setFormData] = useState({
        nameCat: "",
        raceCat: "",
        ageCat: "",
        photoCat: null,   // Ahora será File real
        sickCat: "",
        diagnostic: ""
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;

        // 📌 Nuevo manejo REAL de archivo
        if (id === "photoCat") {
            const file = files[0] || null;
            setFormData({ ...formData, photoCat: file });
            return;
        }

        // texto normal
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveCat(formData);

        // reset
        setFormData({
            nameCat: "",
            raceCat: "",
            ageCat: "",
            photoCat: null,
            sickCat: "",
            diagnostic: ""
        });

        // reset VISUAL del input file
        e.target.reset();
    };

    return (
        <div className="flex md:w-60 flex-col p-2 bg-base xl:w-100">
            
            {/* Puedes mostrar preview si quieres */}
            <div className="flex overflow-hidden w-40 h-40 mx-auto bg-black/20">
                <img
                    className="w-full h-full object-cover"
                    src={
                        formData.photoCat
                            ? URL.createObjectURL(formData.photoCat) // preview real
                            : "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863"
                    }
                    alt=""
                />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">

                <label htmlFor="nameCat">Nombre del gato</label>
                <input
                    type="text"
                    id="nameCat"
                    className="bg-base-dark "
                    value={formData.nameCat}
                    onChange={handleChange}
                />

                <label htmlFor="raceCat">Raza del gato</label>
                <input
                    type="text"
                    id="raceCat"
                    className="bg-base-dark "
                    value={formData.raceCat}
                    onChange={handleChange}
                />

                <label htmlFor="ageCat">Edad del gato</label>
                <input
                    type="number"
                    id="ageCat"
                    className="bg-base-dark "
                    value={formData.ageCat}
                    onChange={handleChange}
                />

                <label htmlFor="photoCat">Foto del gato</label>
                <input
                    type="file"
                    id="photoCat"
                    className="bg-base-dark "
                    accept="image/*"       // solo imágenes
                    onChange={handleChange}
                />

                <label htmlFor="sickCat">Enfermedad del gato</label>
                <input
                    type="text"
                    id="sickCat"
                    className="bg-base-dark "
                    value={formData.sickCat}
                    onChange={handleChange}
                />

                <label htmlFor="diagnostic">Diagnostico</label>
                <textarea
                    id="diagnostic"
                    className="bg-base-dark "
                    value={formData.diagnostic}
                    onChange={handleChange}
                ></textarea>

                <button className="p-2 rounded-xl bg-base-dark mt-2 w-40 mx-auto">
                    Crear Diagnostico
                </button>
            </form>
        </div>
    );
}
