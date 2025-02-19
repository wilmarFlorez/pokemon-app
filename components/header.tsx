import Image from 'next/image';

export const Header = () => {
  return (
    <header className="bg-red-600 p-2 flex justify-center">
      <Image src="/images/logo.png" alt="Logo pokemon" width={66} height={40} />
    </header>
  );
};
