import { useEffect, useState } from "react"

export default function questao(){
    const [questao, setQuestao] = useState(null)


    useEffect(() => {
        fetch("http://localhost:3000/api/questao/123")
            .then(resp => resp.json())
            .then(setQuestao)
    }, [])  

    function renderizarResp() {
        if(questao){
            return questao.resposta.map((resp, i) => {
                 return <li key={i}>{resp}</li>
            })
        }
        else {
            
        }
    }

    return (
        <div>
            <h1>Questao</h1>
            <span>{questao?.enunciado}</span>
            <div>
                <ul>
                    {renderizarResp()}
                </ul>
            </div>
        </div>
    )
}   