import { createContext, useState } from "react";


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([{ id: "abc1", detail: "This is task one." }, { id: "abc2", detail: "This is task two." }, { id: "abc3", detail: "This is task three." }]);

    return (
        <TaskContext.Provider value={{ tasks }} >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;