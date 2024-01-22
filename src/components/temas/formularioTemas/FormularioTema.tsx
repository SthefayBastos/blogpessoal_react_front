import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { buscar } from "../../../services/Service";

function FormularioTema() {
    
    const navigate = useNavigate();

    const [tema, setTemas] = useState<Tema>({} as Tema)

    const { usuario, handleLogout } = useContext(AuthContext)

    const token = usuario.token

    const { id } =  useParams < { id :string }>();

    async function buscarPorId() {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou!')
                handleLogout()
            }

        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa fazer o login novamente. Sua sessão encerrou.')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined){
            buscarPorId(id)
        }
    }, [id])
function atualizarEstado(e: ChangeEvent <HTMLInputElement>) {
        setTemas({
            ...tema,
            [e.target.name]: e.target.value
        })
}

function retornar (){
    navigate("/temas")
}
async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(/temas, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        alert('Tema atualizado com sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao atualizar o Tema')
        }
      }

    } else {
      try {
        await cadastrar(`/temas `, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })

        alert('Tema cadastrado com sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrar a Postagem')
        }
      }
    }

    setIsLoading(false)
    retornar()
  }
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Tema' 'Editar tema'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do tema</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value = {Tema.descricao}
                        onChange={e: ChangeEvent<HTMLInputElement></HTMLInputElement>} => atualizar

                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormularioTema;