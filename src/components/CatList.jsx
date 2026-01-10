

export default function CatList({catData}){

    return(<>
    
        <div className="bg-base w-full p-10 ">
            <div className="w-full p-2">
                <h4 className="h4 my-2">Busca tu gato</h4>
                <input type="text" className="bg-base-dark w-full pl-5 rounded-md" placeholder="Buscar gato" />

            </div>
            <p className="p">Lista de gatos</p>   
            <div className="flex overflow-y-auto border h-90">
                {
                    catData.map(data=>(<>
                    <div key={data.id}>
                        <h1>{data.nameCat}</h1>
                        <img src={URL.createObjectURL(data.photoCat)} alt="" />

                    </div>
                    </>))
                }
            </div>

        </div>

    </>)
}