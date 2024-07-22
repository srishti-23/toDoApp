const {Router}=require('express')
const { getTodo, createTodo,updateTodo,deleteTodo } = require('../controllers/Todocontroller')
const router =Router()

router.get('/',getTodo)
router.post('/create',createTodo)
router.post('/update/:id',updateTodo)
router.delete('/delete/:id',deleteTodo)

module.exports=router