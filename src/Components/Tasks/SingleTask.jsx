import { useContext } from "react";
import { useParams } from "react-router-dom";
import TaskContext from "../TaskContext";


function SingleTask() {

    const { id } = useParams();


    const { tasks } = useContext(TaskContext);
    const currentTask = tasks.find((item) => item.id == id);

    return (
        <>
            <h3>Detail: {currentTask.detail}.</h3>
            <p>id: {currentTask.id}</p>
        </>
    )
}

export default SingleTask;