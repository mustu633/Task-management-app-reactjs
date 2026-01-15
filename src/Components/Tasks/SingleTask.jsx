import { useContext } from "react";
import { useParams } from "react-router-dom";
import TaskContext from "../TaskContext";


function SingleTask() {

    const { id } = useParams();


    const { tasks } = useContext(TaskContext);
    console.log(tasks)
    const currentTask = tasks.find((item) => item.id == id);

    console.log(currentTask)

    return (
        <>
            {/* <h3>Detail: {currentTask.detail}.</h3>
            <p>id: {currentTask.id}</p> */}
            <hr />
            <a href="/app"><button>Back</button></a>
        </>
    )
}

export default SingleTask;