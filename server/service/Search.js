const List = require('../models/List')

const QueryListByName = (name) => {
    return new Promise(async (resolve, reject) =>{
        const {firstName, lastName} = name
        List.find({firstName, lastName})
        .then(data => { return resolve(data[0]) })
        .catch(error => { 
            console.log(error)
            return reject(error) 
        }) 
    })
}

const RespondYesByName = (name) => {
    return new Promise(async (resolve, reject) =>{
        const {firstName, lastName} = name
        List.findOneAndUpdate({firstName, lastName}, {response: 'Yes'} , {new: true})
        .then(data => { return resolve(data) })
        .catch(error => { return reject(error) }) 
    })
}

const RespondNoByName = (name) => {
    return new Promise(async (resolve, reject) =>{
        const {firstName, lastName} = name
        List.findOneAndUpdate({firstName, lastName}, {response: 'No'} , {new: true})
        .then(data => { return resolve(data) })
        .catch(error => { return reject(error) }) 
    })
}

module.exports = { QueryListByName, RespondYesByName, RespondNoByName } 