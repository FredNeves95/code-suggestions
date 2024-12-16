import SecondaryTitle from './SecondaryTitle';

type ExplanationProps = {
  children: string;
};

function Explanation({ children }: ExplanationProps) {
  return (
    <>
      <SecondaryTitle>Explanation</SecondaryTitle>
      <div className="pl-4">{children}</div>
    </>
  );
}

export default Explanation;
