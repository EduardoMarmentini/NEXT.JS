/*
    Para criarmos rotas dinamicas no next envelopamos ela com um par de colchetes assim tornando dinamico

    E para acessarmos essas informações usamos o useRoute do next/router
*/
import { useRouter } from "next/router"

export default function Buscar(){

    const router = useRouter()

    const id = router.query.id

    return(
        <div>
            <h1>Rotas / {id} / Buscar!!!!</h1>
        </div>
    )
}