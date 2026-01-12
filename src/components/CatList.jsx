import { useEffect, useState } from "react";

export default function CatList({ catData }) {

    const [filter, setFilter] = useState("");
    

    const filteredCats = catData.filter(cat =>
        cat.nameCat.toLowerCase().includes(filter.toLowerCase()) ||
        cat.raceCat.toLowerCase().includes(filter.toLowerCase()) ||
        cat.sickCat.toLowerCase().includes(filter.toLowerCase()) ||
        cat.status.toLowerCase().includes(filter.toLowerCase())||
        cat.diagnostic.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <div className="bg-base w-full h-full md:p-10 ">

                <div className="w-full p-2">
                    <h4 className="h4 my-2">Busca tu gato</h4>

                    <input
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-base-dark w-full pl-5 rounded-md"
                        placeholder="Buscar gato"
                    />
                </div>

                <p className="p">Lista de gatos</p>

                <div className="grid grid-cols-1 w-full md:grid-cols-3 overflow-y-auto border h-full md:h-90">

                    {
                        filteredCats.map(data => (
                            <div key={data.id} className="w-full bg-base-dark h-auto p-2 rounded-xl">
                                <img src={data.photoCat} alt="" className="w-full h-60" />

                                <p className="p">{data.nameCat}</p>
                                <p className="p">{data.raceCat}</p>
                                <p className="p">{data.ageCat}</p>
                                <p className="p">{data.diagnostic}</p>
                                <div   className={`p-2 rounded text-white ${
                                        data.status === "critico"
                                        ? "bg-red-500"
                                        : data.status === "vulnerable"
                                        ? "bg-orange-500"
                                        : "bg-green-500"
                                    }`}> <p>{data.status}</p> </div>
                            </div>
                        ))
                    }

                    {filteredCats.length === 0 && (
                        <p className="p col-span-3 text-center opacity-50">
                            No se encontraron gatos con esa búsqueda
                        </p>
                    )}
                </div>

            </div>
        </>
    );
}
