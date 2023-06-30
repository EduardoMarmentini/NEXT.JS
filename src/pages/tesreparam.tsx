/*
    Tambem é possivel passar parametros e acessa-los com links de redirect do next e usando a propriedade router
*/

import Link from "next/link";

export default function TesteParam(){
    return(
        <div>
            <h1>Teste de Parametros via link</h1>
            <Link href="/testeparam2?nome=Leonardo&id=1234">Redirecionar</Link>
        </div>
    )
}