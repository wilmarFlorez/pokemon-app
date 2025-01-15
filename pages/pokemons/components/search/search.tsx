import { Filter } from '../filter/filter';
import { InputSearch } from '../input-search/input-search';

export const Search = () => {
  return (
    <section className="mt-8 md:mt-16 flex justify-center">
      <div className="container px-4 py-4 flex flex-col justify-center items-center p-2 gap-4">
        <InputSearch />
        <Filter />
      </div>
    </section>
  );
};
