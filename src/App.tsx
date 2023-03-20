import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import UserSearchClass from "./classes/userSearchClass";

const mockUsers = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

function App() {
  return (
    <div className="app">
      <h1>React with Typescript</h1>
      <Parent />
      <EventComponent />
      <GuestList />
      <UserSearch mockUsers={mockUsers} />
      <UserSearchClass mockUsers={mockUsers} />
    </div>
  );
}

export default App;
