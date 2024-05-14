import { MdDelete } from "react-icons/md";
function ToDoItem1({ nameTodo, namedate, onDeleteClick }) {
  // let nameTodo = " Milk ";
  // let namedate = " 14/05/2024";
  return (
    <div className="row kg-row">
      <div className="col-6">{nameTodo}</div>
      <div className="col-4">{namedate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDeleteClick(nameTodo)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem1;
