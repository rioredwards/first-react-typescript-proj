interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{`I am a child with the props: ${color}`}</div>;
};
