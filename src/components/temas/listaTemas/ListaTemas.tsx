
import { useNavigate } from 'react-router-dom';
import CardTemas from '../cardTemas/CardTemas';
import { useContext, useEffect, useState } from 'react';
import Tema from '../../../models/Tema';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import {  ThreeDots } from 'react-loader-spinner';
import { ToastAlerta } from '../../../util/ToastAlert';

function ListaTemas() {

    const navigate = useNavigate();

    const [temas, setTemas] = useState<Tema[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token

    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou!',"info")
                handleLogout()
            }

        }
    }
    useEffect(() => {
        if (token === '') {
        ToastAlerta('Você precisa fazer o login novamente. Sua sessão encerrou.', "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
            buscarTemas()
    }, [temas.length])

    console.log (temas)
    
    return (
        <>
            {temas.length === 0 && ( 
                <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#134E4A"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="flex justify-center m-1"
                
            />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            { temas.map((tema ) => (
                                <>
                                    <CardTemas key={tema.id}  tema={tema} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaTemas;