import { useState } from "react";

export default function FormCat({ saveCat }) {

    const [formData, setFormData] = useState({
        nameCat: "",
        raceCat: "",
        ageCat: "",
        photoCat: null,   // File real
        sickCat: "",
        status:"",
        diagnostic: ""
    });

    // Convertir File a Base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const handleChange = (e) => {
        const { id, value, files } = e.target;

        if (id === "photoCat") {
            const file = files?.[0] || null;
            setFormData({ ...formData, photoCat: file });
            return;
        }

        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let base64Photo = null;

        if (formData.photoCat) {
            base64Photo = await convertToBase64(formData.photoCat);
        }

        // Enviar datos completos a Dexie
        saveCat({
            ...formData,
            photoCat: base64Photo
        });

        // Resetear formulario
        setFormData({
            nameCat: "",
            raceCat: "",
            ageCat: "",
            photoCat: null,
            sickCat: "",
            status:"",
            diagnostic: ""
        });
    };

    return (
        <div className="flex md:w-60 flex-col p-2 bg-base xl:w-100">

            <div className="flex overflow-hidden w-40 h-40 mx-auto bg-black/20">
                <img
                    className="w-full h-full object-cover"
                    src={
                        formData.photoCat
                            ? URL.createObjectURL(formData.photoCat)
                            : "https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863"
                    }
                    alt=""
                />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col ">

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
                    accept="image/*"
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
                <label htmlFor="status">Estado</label>
                
                <select name="" value={formData.status} onChange={handleChange} id="status" className="text-center bg-base-dark">
                    <option value="">Selecciona estado</option>
                    <option value="critico">critico</option>
                    <option value="saludable">saludable</option>
                    <option value="vulnerable">vulnerable</option>
                </select>

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
