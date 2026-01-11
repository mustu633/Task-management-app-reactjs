import SearchTask from "./Search/SearchTask.jsx";
import AddTask from "./TaskController/AddTask.jsx";
import TaskList from "./Tasks/TaskList.jsx";
import Title from "./Title/Title.jsx";

function MainApp() {

    return (
        <>
            <div className="app-container">
                <Title />
                <AddTask />
                <hr />
                <SearchTask />
                <hr />
                <TaskList />
            </div>
        </>
    )
}

export default MainApp;