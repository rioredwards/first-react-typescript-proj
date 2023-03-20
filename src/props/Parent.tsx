import { Child } from "./Child";

const Parent = () => {
  function onClick() {
    console.log("Clicked!");
  }
  return (
    <Child color="Red" onClick={onClick}>
      <div>I am a child prop!</div>
    </Child>
  );
};
export default Parent;
