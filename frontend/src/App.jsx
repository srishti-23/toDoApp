import React, { useEffect, useState } from "react";
import ToDO from "./components/ToDO";
import backgroundImage from "../src/assets/bg.jpg";
import { getAllTodo, addToDO, updateToDO, deleteToDo } from "./utils/HandleApi";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(null);
  const [text, setText] = useState("");
  const [updatingTodo, setupdatingTodo] = useState(false);

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (id, text) => {
    setTodoId(id);
    setText(text);
    setupdatingTodo(true);
  };

  const handleAddOrUpdate = () => {
    if (updatingTodo) {
      updateToDO(todoId, text, setTodo, setText, setupdatingTodo);
    } else {
      addToDO(text, setText, setTodo);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="text-center md:mt-[-460px] md:ml-12">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">ToDo App</h1>
        </div>
        <div className="fixed w-4/5 md:w-1/2 my-2 p-4 h-80 ml-5 md:ml-20 bg-white bg-opacity-70 rounded-md shadow-lg">
          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="text"
              placeholder="Write Todos here.."
              className="p-2 mb-2 md:mb-0 md:ml-2 w-full rounded-md"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="bg-green-500 text-white rounded-md p-2 md:ml-2"
              onClick={handleAddOrUpdate}
            >
              {updatingTodo ? "UPDATE" : "ADD"}
            </button>
          </div>
          <div className="list-none rounded-md p-2 mt-2 flex flex-col text-gray-800">
            {todo.map((item) => (
              <ToDO
                key={item._id}
                text={item.text}
                updateToDo={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setTodo)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
