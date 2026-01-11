import { useContext } from "react";
import TaskContext from "../TaskContext";

function TaskList() {

    const { tasks } = useContext(TaskContext);

    return (
        <>
            <ol>
                {tasks.map((item) => {
                    return (
                        <a key={item.id} href={`/app/task/${item.id}`}><li key={item.id}>{item.detail}</li></a>
                    )
                })}
            </ol>
        </>
    )
}

export default TaskList;