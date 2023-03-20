import { useRef, useState, useEffect } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  mockUsers: User[];
}

const UserSearchRef: React.FC<UserSearchProps> = ({ mockUsers }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [users, setUsers] = useState<User[]>([...mockUsers]);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, []);

  const onSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundUsers = mockUsers.filter((user) => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    });

    setUsers(foundUsers);
  };

  return (
    <div>
      <h3>User Search Ref</h3>
      <form onSubmit={(e) => onSearchUser(e)}>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

export default UserSearchRef;
