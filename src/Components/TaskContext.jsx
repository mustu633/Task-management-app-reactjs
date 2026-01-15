import { createContext, useState } from "react";


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([{ id: "abc1", detail: "This is task one." }, { id: "abc2", detail: "This is task two." }, { id: "abc3", detail: "This is task three." }]);

    let myarr = ["adil"]

    function addTask(newDetail) {
        const newId = (crypto.randomUUID());
        setTasks([...tasks, {id: `${newId}`, detail: `${newDetail}`}]);
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask }} >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;