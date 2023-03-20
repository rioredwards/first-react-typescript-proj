import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearchFC from "./state/UserSearchFC";
import EventComponent from "./events/EventComponent";
import UserSearchClass from "./classes/userSearchClass";
import UserSearchRef from "./refs/UserSearchRef";

const mockUsers = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

function App() {
  return (
    <div className="app">
      <h1>React with Typescript</h1>
      {/* <Parent /> */}
      {/* <EventComponent /> */}
      {/* <GuestList /> */}
      <UserSearchRef mockUsers={mockUsers} />
      {/* <UserSearchFC mockUsers={mockUsers} /> */}
      {/* <UserSearchClass mockUsers={mockUsers} /> */}
    </div>
  );
}

export default App;
