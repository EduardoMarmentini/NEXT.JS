/*
  Para navegar entre paginas podemos usar o elemento Link do next, linkamos um elemento a uma pagina e adicionamos o evento OnClick 
  assim quando o elemento ativar essa função irá redirecionar para a pagina vinculada, podendo assim passar parametros para ela.
*/

import Link from "next/link";
import { Router, useRouter } from "next/router"

export default function Rota(){
    const router = useRouter()
    
    function navegacao(url){
        router.push(url)
    }
    
    function navegacaoComParam(){
        router.push({
            pathname:"/rotas/param",
            query: {
                id : 123,
                nome:"Eduardo"
            }
        })
    }
    return(
        <div>
            <h1>Teste de Rota</h1>
            <ul>
                <Link href="/rotas/param?id=1&nome=Lucas">
                    <li>Paramns</li>
                </Link>
                <Link href="/rotas/param?id=2&nome=Eduardo">
                    <li>Paramns 2</li>
                </Link>
                <Link href="/rotas/param?id=3&nome=Debora">
                    <li>Paramns 3</li>
                </Link>
            </ul>
            <div style={{display: "flex", flexDirection: "column"}}>
                <button onClick={ () => router.push("rotas/123w/buscar")}>Buscar</button>
                <button onClick={ () => navegacao("/rotas/param?id=1&nome=Lucas")}>Paramns</button>
                <button onClick={ () => navegacaoComParam() }>Navegacao com Param</button>
            </div>
        </div>
        
    )
}