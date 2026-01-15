import { useContext } from "react";
import { useParams } from "react-router-dom";
import TaskContext from "../TaskContext";
import { Button, Paper } from "@mui/material";


function SingleTask() {

    const { id } = useParams();


    const { tasks } = useContext(TaskContext);
    console.log(tasks)
    const currentTask = tasks.find(item => item.id === id);

    return (
        <Paper sx={{ maxWidth: 700, mx: "auto", mt: 3, p: 3 }} >
            <h3>Detail: {currentTask.detail}.</h3>
            <p>id: {currentTask.id}</p>
            <hr />
            <Button
                variant="outlined"
                component="a"
                href={`/app`}
            >
                Go Back
            </Button>
        </ Paper>
    )
}

export default SingleTask;