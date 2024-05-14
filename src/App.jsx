import AppName from "./component/AppName";
import AddToDo from "./component/AddToDo";
import TodoItem from "./component/TodoItem";
import "./App.css";
import { useState } from "react";
import WelcomeMsge from "./component/WelcomeMsge";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    //console.log(`This ${todoItemName} is Deleted`);
  };

  return (
    <center className="todo">
      <AppName></AppName>
      <AddToDo onNewItem={handleNewItem}></AddToDo>
      {todoItems.length === 0 && <WelcomeMsge></WelcomeMsge>}
      <TodoItem
        todoItems={todoItems}
        handleDeleteItem={handleDeleteItem}
      ></TodoItem>
    </center>
  );
}

export default App;
