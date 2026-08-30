import "./App.css";
import UserList from "./UserList";

function App() {
    return (
        <>
            <UserList
                users={[
                    { id: 1, name: "a" },
                    { id: 2, name: "b" },
                    { id: 3, name: "c" },
                    { id: 4, name: "d" },
                ]}
            />
        </>
    );
}

export default App;
