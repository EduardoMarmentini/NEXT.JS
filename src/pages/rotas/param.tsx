/*
    Outro metodo de passar valores via rotas é com parametros e acessa-lo da mesma forma que o anterior 
*/

import { useRouter } from "next/router"
import Link from "next/link";

export default function Param(){

    const router = useRouter()

    const nome =  router.query.nome
    const id = router.query.id

    console.log(router)
    
    return(
        <div>
            <h1>Rotas com paramentros</h1>
            <p>Nome: {nome} / Id: {id}</p>
            <Link href="/rotas">
                    <button>Voltar</button>
            </Link>
        </div>
    )
}