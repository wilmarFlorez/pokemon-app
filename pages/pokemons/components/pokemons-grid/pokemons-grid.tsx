interface Props {
  children: React.ReactNode;
}

export const PokemonsGrid = ({ children }: Props) => {
  return (
    <div className="pt-16 md:pt-32">
      <section className="flex justify-center">
        <div className="container px-2 md:px-0 grid gap-4 md:gap-8 md-gap-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children}
        </div>
      </section>
    </div>
  );
};
