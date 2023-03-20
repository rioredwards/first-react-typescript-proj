interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <>
      <div>{`I am a child component with the props: ${color}`}</div>
      {children}
      <button onClick={onClick}>Click me!</button>
    </>
  );
};
