/*
    Para criarmos rotas dinamicas no next envelopamos ela com um par de colchetes assim tornando dinamico

    E para acessarmos essas informações usamos o useRoute do next/router
*/
import { useRouter } from "next/router"

export default function Nome(){

    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    return(
        <div>
            <h1>Rotas / {id} / {nome}</h1>
        </div>
    )
}