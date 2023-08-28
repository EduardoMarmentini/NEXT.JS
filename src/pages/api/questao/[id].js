export default function Questao(req, res){
    if (req.method === "GET"){
        get( req, res)
    }
    else {
        res.status(405).send()
    }
}

function get(req, res){
    if (req.method === "GET"){
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado : "Whats your favorite color?",
            resposta : [
                "Black",
                "White",
                "Purple", 
                "Red"
            ]
        })
    }
}