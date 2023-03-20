interface ChildProps {
  color: string;
}

export const Child: React.FC<ChildProps> = ({ color }) => {
  return <div>{`I am a child with the props: ${color}`}</div>;
};
