import { Filter } from '../filter/filter';
import { InputSearch } from '../input-search/input-search';

export const Search = () => {
  return (
    <section className="mt-16 flex justify-center">
      <div className="container px-4 py-4 flex justify-center gap-4">
        <InputSearch />
        <Filter />
      </div>
    </section>
  );
};
