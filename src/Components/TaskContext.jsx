import { createContext, useState } from "react";


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([{ id: "abc1", detail: "This is task one." }, { id: "abc2", detail: "This is task two." }, { id: "abc3", detail: "This is task three." }]);

    function addTask(newDetail) {
        const newId = (crypto.randomUUID());
        const newTask = {id: newId, detail: newDetail};
        setTasks([...tasks, { id: newId, detail: newDetail }]);
        console.log(tasks);
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask }} >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;