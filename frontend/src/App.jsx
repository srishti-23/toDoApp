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
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Adjust as needed
          backgroundRepeat:'no-repeat',
          backgroundPosition: "center", // Adjust as needed
          /* Additional styling if needed */
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <h1 className="text-3xl font-bold mt-[-460px] ml-12 ">
        ToDo App
      </h1>
      <div className=" fixed w-1/2 my-2 p-4  h-80 ml-20">
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Write Todos here.."
            className="p-2 ml-2 w-full	rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-green-500 ml-2 text-white rounded-md p-2"
            onClick={handleAddOrUpdate}
          >
            {updatingTodo ? "UPDATE" : "ADD"}
          </button>
        </div>
        <div className="list-none rounded-md p-2 mt-2 flex flex-col text-white">
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
