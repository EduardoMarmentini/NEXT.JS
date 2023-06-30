import Link from "next/link"
import { useRouter } from "next/router"

export default function TesteParam2(){

    const router = useRouter()

    const nome =  router.query.nome
    const id = router.query.idade

    console.log(router)
    return(
        <div>
            <h1>Teste de parametro pg 2</h1>
            <p>Nome: {nome}/ Idade: {id}</p>
            <Link  href="tesreparam">Voltar</Link>
        </div>
    )
}