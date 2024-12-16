type MainTitleProps = {
  children: React.ReactNode | string;
};

function MainTitle({ children }: MainTitleProps) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}

export default MainTitle;
