import styles from "./Wrapper.module.css";
import Headers from "./Headers";
import AddTaskItem from "./ToDoInput";
import TaskItems from "./TodoList";

const ToDoWrapper = () => {
  return (
    <div className="TodoWrapper">
      <Headers />
      <AddTaskItem />
      <TaskItems />
    </div>
  );
};

export default ToDoWrapper;
