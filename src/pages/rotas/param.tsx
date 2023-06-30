/*
    Outro metodo de passar valores via rotas é com parametros e acessa-lo da mesma forma que o anterior 
*/

import { useRouter } from "next/router"

export default function param(){

    const router = useRouter()

    const nome =  router.query.nome
    const idade = router.query.idade

    console.log(router)
    
    return(
        <div>
            <h1>Rotas com paramentros</h1>
            <p>Nome: {nome} / Idade: {idade}</p>
        </div>
    )
}