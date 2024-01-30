import ListaPostagens from "../../../components/postagens/cardPostagem/listaPostagens/ListaPostagens";
import ModalPostagem from "../../../components/postagens/modalPostagem/ModalPostagem";

function Home() {

    return (
        <>
            <div id="container" className="flex justify-center  bg-teal-900">
                <div id="subcontainer" className="container grid grid-cols-2  text-gray-400">
                    <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4  ">
                        <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
                        <p className="text-xl">Expresse aqui os seus pensamentos e opiniões</p>
                        <div className="flex justify-around gap-4">

                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                                <button className='rounded text-gray-400 border-gray-400 border-solid border-2  px-4  py-2'>Ver postagens</button>
                            </div>
                            
                            </div>
                        </div>

                        <div id="imagem" className="
                        flex 
                        justify-center
                        ">
                            <img
                                src="src/assets/img/brain sides-bro.png"
                                alt="Imagem da Página Home"
                                className="w-2/3"
                            />
                        </div>
                    </div>
                </div>
                <ListaPostagens />
            </>
            );
}

            export default Home