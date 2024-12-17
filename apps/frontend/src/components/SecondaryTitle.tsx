type SecondaryTitleProps = {
  children: React.ReactNode | string;
};

function SecondaryTitle({ children }: SecondaryTitleProps) {
  return (
    <h2 className="text-lg opacity-95 font-bold text-white">{children}</h2>
  );
}

export default SecondaryTitle;
