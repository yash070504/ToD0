import ToDoItem1 from "./ToDoItem1";
import styles from "./TodoItem.module.css";
const TodoItem = ({ todoItems, handleDeleteItem }) => {
  return (
    <div className={styles.todoItem}>
      {todoItems.map((item) => (
        <ToDoItem1
          key={item.name}
          nameTodo={item.name}
          namedate={item.dueDate}
          onDeleteClick={handleDeleteItem}
        ></ToDoItem1>
      ))}
    </div>
  );
};

export default TodoItem;
