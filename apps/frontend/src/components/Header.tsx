import MainTitle from './MainTitle';

type HeaderProps = {
  children: string;
};

function Header({ children }: HeaderProps) {
  return (
    <div className="w-full">
      <MainTitle>{children}</MainTitle>
    </div>
  );
}

export default Header;
