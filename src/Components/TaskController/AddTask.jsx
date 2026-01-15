import { useContext, useEffect, useId, useRef, useState } from "react";
import TaskContext from "../TaskContext.jsx";
import { TextField } from "@mui/material";

function AddTask() {

    const { addTask } = useContext(TaskContext);

    const inpRef = useRef();

    const [inpValue, setInpValue] = useState("");


    function handleChange() {
        console.log(inpRef.current);
    }


    function handleClick() {
        addTask(inpValue);
    }

    return (
        <>
            <TextField id="standard-basic" label="Standard" variant="standard" ref={inpRef} onChange={handleChange} value={inpValue}/>
            {/* <input type="text" ref={inpRef} onChange={handleChange} /> */}
            <button onClick={handleClick}>Add as new Task</button>
        </>
    )
}

export default AddTask;