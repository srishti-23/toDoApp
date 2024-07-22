const ToDoModel = require("../models/Todomodels");

module.exports.getTodo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};
module.exports.createTodo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then((data) => {
    console.log("Todos added successfully...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const _id=req.params.id
  const { text } = req.body
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => {
      res.send(`ToDos updated Successfully`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteTodo=async (req,res)=>{
    const _id=req.params.id
    ToDoModel.findByIdAndDelete(_id)
    .then(()=>{
        res.send(`ToDos Deleted successfully `)
    })
    .catch((err)=>{
        console.log(err);
    })
}
