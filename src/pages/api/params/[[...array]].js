export default function params(req, res){
    res.status(200).json({
        param : req.query
    })
}