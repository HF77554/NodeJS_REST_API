const express = require('express')
const router = express.Router()



//REST rubric
//Getting all subcsribers
router.get('/', (req, res) =>{
    res.send('Hello World!')
})
//Getting One subscriber
router.get('/:id', (req, res) =>{
    res.send(req.params.id)
})
//Creating One subscriber
router.post('/', (req, res) =>{
    res.send('Hello World')
})
//Updating One subscriber
router.patch('/:id', (req, res) =>{
    
})
//Deleting One subscriber
router.delete('/:id', (req, res) =>{
    
})




module.exports = router