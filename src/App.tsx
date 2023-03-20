import "./App.css";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

function App() {
  return (
    <div className="app">
      <UserSearch />
      <GuestList />
      <Parent />
    </div>
  );
}

export default App;
