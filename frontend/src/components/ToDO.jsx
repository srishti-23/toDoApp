import React from "react";
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const ToDO = ({ text, updateToDo, deleteToDo }) => {
  return (
    <div className="flex justify-between items-center bg-black  p-2 mb-2 rounded">
      <div className="text-white">{text}</div>
      <div className="flex gap-2">
        <BiEdit size={30} onClick={updateToDo} className="text-white cursor-pointer" />
        <AiFillDelete size={30} onClick={deleteToDo} className="text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default ToDO;
