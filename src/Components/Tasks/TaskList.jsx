import { useContext } from "react";
import TaskContext from "../TaskContext";
import { List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";

function TaskList() {

    const { tasks } = useContext(TaskContext);

    return (
        <Paper sx={{ maxWidth: 500, mx: "auto", mt: 3 }}>
            <Typography
                variant="h6"
                textAlign="center"
                sx={{ p: 2 }}
            >
                Task List
            </Typography>

            <List>
                {tasks.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            component="a"
                            href={`/app/task/${item.id}`}
                        >
                            <ListItemText
                                primary={item.detail}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default TaskList;