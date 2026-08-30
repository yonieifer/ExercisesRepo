interface User {
    id: number;
    name: string;
}

interface UserListProp {
    users: User[]
}

const UserList = ({users}: UserListProp) => {
    return (
        <>
            <div>UserList</div>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </>
    );
};

export default UserList;
