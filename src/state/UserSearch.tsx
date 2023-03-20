import { useState } from "react";

interface User {
  name: string;
  age: number;
}

const mockUsers = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<User[]>([...mockUsers]);

  const onSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundUsers = mockUsers.filter((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    });
    console.log(foundUsers);

    setUsers(foundUsers);
  };

  return (
    <div>
      <h3>User Search</h3>
      <form onSubmit={(e) => onSearchUser(e)}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Search</button>
      </form>
      <div>
        {users && (
          <ul>
            {users.map((user, index) => (
              <li key={index}>{`${user.name}, age: ${user.age}`}</li>
            ))}
          </ul>
        )}
        {users.length === 0 && <div>No users found 😢</div>}
      </div>
    </div>
  );
};

export default UserSearch;
