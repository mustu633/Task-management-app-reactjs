import { useContext, useEffect, useId, useRef, useState } from "react";
import TaskContext from "../TaskContext.jsx";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

function AddTask() {

    const { addTask } = useContext(TaskContext);

    const inpRef = useRef();

    const [inpValue, setInpValue] = useState("");


    function handleChange() {
        setInpValue(inpRef.current.value)
    }


    function handleClick() {
        addTask(inpValue);
        setInpValue("");
    }

    return (
        <Card sx={{minWidth: 200, maxWidth: 500, mx: "auto", mt: 2 }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h6" textAlign="center">
                    Add New Task
                </Typography>

                <TextField
                    label="Task Details ..."
                    variant="filled"
                    inputRef={inpRef}
                    value={inpValue}
                    onChange={handleChange}
                    fullWidth
                />

                <Button
                    variant="contained"
                    onClick={handleClick}
                >
                    Add Task
                </Button>

            </CardContent>
        </Card>
    );
}

export default AddTask;