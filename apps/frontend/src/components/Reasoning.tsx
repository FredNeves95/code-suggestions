import SecondaryTitle from './SecondaryTitle';

type ReasoningProps = {
  reasons?: string[];
};

function Reasoning({ reasons }: ReasoningProps) {
  if (!reasons || reasons.length === 0) {
    return null;
  }

  return (
    <div>
      <SecondaryTitle>Reasoning</SecondaryTitle>
      <ul className="pl-4 list-disc">
        {reasons?.map((reason, index) => <li key={index}>{reason}</li>)}
      </ul>
    </div>
  );
}

export default Reasoning;
