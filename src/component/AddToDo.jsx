import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    //console.log(event);
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To-Do Work"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <IoAddOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
