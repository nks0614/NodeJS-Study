function basicAPI(req, res){
    res.status(200).json(
        {
            "success" : true
        }
    )
}

function testAPI(req, res){
    res.status(200).json(
        {
            "msg" : "test"
        }
    )
}

function postTestAPI(req, res){
    const userMsg = req.body.msg
    res.status(200).json(
        {
            "msg" : userMsg 
        }
    )
}

module.exports = {
    basicAPI : basicAPI,
    testAPI : testAPI,
    postTestAPI : postTestAPI,
}