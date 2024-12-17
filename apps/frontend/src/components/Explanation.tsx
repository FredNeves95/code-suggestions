import SecondaryTitle from './SecondaryTitle';

type ExplanationProps = {
  children: string;
};

function Explanation({ children }: ExplanationProps) {
  return (
    <div>
      <SecondaryTitle>Explanation</SecondaryTitle>
      <div className="pl-4">{children}</div>
    </div>
  );
}

export default Explanation;
