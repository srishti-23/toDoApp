import axios from "axios";
const baseUrl = "https://todoapp-mvso.onrender.com/";

const getAllTodo = (setTodo) => {
  axios
    .get(`${baseUrl}`)
    .then(({ data }) => {
      console.log("data ---->", data);
      setTodo(data);
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
    });
};

const addToDO = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/create`, { text })
    .then(({ data }) => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch((error) => {
      console.error("Error adding todo:", error);
    });
};

const updateToDO = (todoId, text, setTodo, setText, setupdatingTodo) => {
  axios
    .post(`${baseUrl}/update/${todoId}`, { text })
    .then(({ data }) => {
      setText("");
      setupdatingTodo(false);
      getAllTodo(setTodo);
    })
    .catch((error) => {
      console.error("Error updating todo:", error);
    });
};

const deleteToDo = (_id,setTodo) => {
  axios
    .delete(`${baseUrl}/delete/${_id}`,{_id})
    .then((data) => {
        console.log(data);
     getAllTodo(setTodo);
    })
    .catch((error) => {
      console.error("Error deleting todo:", error);
    });
};

export { getAllTodo, addToDO, updateToDO, deleteToDo };
