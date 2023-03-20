import { useState } from "react";

const EventComponent = () => {
  const [event, setEvent] =
    useState<React.ChangeEvent<HTMLInputElement> | null>(null);

  function logChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
    setEvent(e);
  }

  function logDragEvent(e: React.DragEvent<HTMLDivElement>) {
    console.log(e);
  }

  return (
    <div>
      <h3>Event Component</h3>
      <input onChange={logChangeEvent} type="text" />
      <div>{event && event.target.value}</div>
      <div onDrag={logDragEvent} draggable>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
