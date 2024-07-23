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
        className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center md:text-4xl lg:text-5xl">
          ToDo App
        </h1>
        <div className="w-11/12 md:w-3/4 lg:w-1/2 p-4 bg-white bg-opacity-70 rounded-md shadow-lg">
          <div className="flex flex-col md:flex-row mb-4">
            <input
              type="text"
              placeholder="Write Todos here..."
              className="p-2 mb-2 md:mb-0 md:mr-2 w-full rounded-md"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="bg-green-500 text-white rounded-md p-2 w-full md:w-auto"
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
