type TertiaryTitleProps = {
  children: React.ReactNode | string;
};

function TertiaryTitle({ children }: TertiaryTitleProps) {
  return <h3 className="text-md font-bold">{children}</h3>;
}

export default TertiaryTitle;
