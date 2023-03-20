import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  mockUsers: User[];
}

interface UserSearchState {
  name: string;
  users: User[];
}

class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    users: [...this.props.mockUsers],
  };

  onSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundUsers = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.name.toLowerCase());
    });

    this.setState({ users: foundUsers });
  };

  render() {
    const { users, name } = this.state;
    return (
      <div>
        <h3>User Search Class</h3>
        <form onSubmit={(e) => this.onSearchUser(e)}>
          <input
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
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
  }
}

export default UserSearchClass;
