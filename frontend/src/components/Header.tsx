interface HeaderProps {
  subtext: string | null;
}

const Header = ({ subtext }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center gap-4 w-full px-4">
      <h1 className="text-6xl font-comic font-bold text-primary-green title-shadow">
        Edutastic
      </h1>
      {subtext && <p className="font-comic font-bold text-2xl">{subtext}</p>}
    </header>
  );
};

export default Header;
