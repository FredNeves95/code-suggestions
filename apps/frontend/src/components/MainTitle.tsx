type MainTitleProps = {
  children: React.ReactNode | string;
};

function MainTitle({ children }: MainTitleProps) {
  return <h1 className="text-xl font-bold text-white">{children}</h1>;
}

export default MainTitle;
