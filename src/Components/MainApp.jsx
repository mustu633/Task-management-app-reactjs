import { Paper } from "@mui/material";
import AddTask from "./TaskController/AddTask.jsx";
import TaskList from "./Tasks/TaskList.jsx";
import Title from "./Title/Title.jsx";

function MainApp() {

    return (
        <>
            <Paper sx={{ minWidth: 500, maxWidth: 700, mx: "auto", mt: 0, p: 3, bg: "green",  backgroundColor: "primary.main" }}>
                <div className="app-container">
                    <Title />
                    <AddTask />
                    <hr />
                    <TaskList />
                </div>
            </Paper>
        </>
    )
}

export default MainApp;