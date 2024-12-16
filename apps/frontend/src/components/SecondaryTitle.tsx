type SecondaryTitleProps = {
  children: React.ReactNode | string;
};

function SecondaryTitle({ children }: SecondaryTitleProps) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export default SecondaryTitle;
