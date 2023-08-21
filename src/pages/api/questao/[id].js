export default function questao(req, res){
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
    else {
        req.status(405).send()
    }
}