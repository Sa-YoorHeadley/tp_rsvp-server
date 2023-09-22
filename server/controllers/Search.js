const { QueryListByName, RespondYesByName, RespondNoByName } = require("../service/Search");


const SearchList = async (req, res) => {
    const {firstName, lastName} = req.query
    console.log(req.query)

    QueryListByName({firstName, lastName})
    .then(data => {
        console.log(data)
        if(data){ return res.status(302).json(data) }
        return res.status(404).json(null)

    })
    .catch(error => {
        console.log(error)
        res.status(404).json(null)
    })
}
const RespondYes = async (req, res) => {
    const {firstName, lastName, plusOneResponse} = req.query
    if(plusOneResponse){
        RespondYesByName({firstName, lastName, plusOneResponse})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(404).json(null)
        })
    }

    RespondYesByName({firstName, lastName, plusOneResponse})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.log(error)
        res.status(404).json(null)
    })
}
const RespondNo = async (req, res) => {
    const {firstName, lastName, plusOneResponse} = req.query
    if(plusOneResponse){
        RespondNoByName({firstName, lastName, plusOneResponse})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(404).json(null)
        })
    }

    RespondNoByName({firstName, lastName, plusOneResponse})
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.log(error)
        res.status(404).json(null)
    })
}

module.exports = { SearchList, RespondYes, RespondNo }; 