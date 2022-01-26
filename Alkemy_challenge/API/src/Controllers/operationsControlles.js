
const {Operation, User} = require('../db.js')


// Get all Operations
async function getOperations(req,res) {

    try {
        let operations = await Operation.findAll()
        res.send(operations)
    } catch (error) {
        res.status(404).send('Error al obtener las operaciones => ' + error)
    }

}


async function getOperationsById(req,res) {

    const { id } = req.params;

    // console.log('ID =>',id)

    try {
        let operations = await Operation.findOne(
            { 
                where: {id: id} 
            })
        if( operations === null) {
            res.status(404).send('No se encontro la operacion (is null)')
        } 
        res.send(operations)
    } catch (error) {
        res.status(404).send('Error al obtener las operaciones => ' + error)
    }

}

// Create New Operation
async function postOperation(req,res) {

    const { concept, amount, date, type, category , userId} = req.body;


    try {
        let operationCreate = await Operation.create({concept, amount, date, type, category, userId})
        // console.log(operationCreate.toJSON())  // toJSON() => devuelve un objeto con los datos de la operacion
        // let user = await User.findOne({where: {id: userId}})
        // operationCreate.addUser(user)

        res.send( {"Operation Saved": operationCreate.toJSON() } )
    } catch (error) {
        res.status(404).json('Error al guardar la operacion => ' + error.message)
    } 
}

async function deleteOperationsById(req,res) {

    const { postId } = req.body;


    try {
        Operation.destroy({ where: { id: postId } });
        let operations = await Operation.findAll()
        res.send(operations)
    } catch (error) {
        res.status(404).json('Error al guardar la operacion => ' + error.message)
    } 
}

async function updatePost(req,res) {

    const {id, concept, amount, date, type, category , userId} = req.body;


    try {
        Operation.update({concept, amount, date, type, category},{ where: { id: id } });
        let operations = await Operation.findAll()
        res.send(operations)
    } catch (error) {
        res.status(404).json('Error al guardar la operacion => ' + error.message)
    } 
}

module.exports = {
    getOperations,
    getOperationsById,
    postOperation,
    deleteOperationsById,
    updatePost
}