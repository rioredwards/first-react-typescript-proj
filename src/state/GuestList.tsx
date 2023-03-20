import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  function handleInputText(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleAddGuest() {
    setGuests([...guests, name]);
    setName("");
  }

  return (
    <div>
      <h3>Guess List</h3>
      <input value={name} onChange={handleInputText} />
      <button onClick={handleAddGuest}>Add Guess</button>

      <ul>
        {guests.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
