import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

function App() {
  return (
    <div className="app">
      <h1>React with Typescript</h1>
      <EventComponent />
      <UserSearch />
      <GuestList />
      <Parent />
    </div>
  );
}

export default App;
