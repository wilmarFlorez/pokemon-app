import { Filter } from '../filter/filter';
import { InputSearch } from '../input-search/input-search';

interface Props {
  disabledButton: boolean;
}

export const Search = ({ disabledButton }: Props) => {
  return (
    <section className="mt-16 flex justify-center">
      <div className="container px-4 py-4 flex justify-center gap-4">
        <InputSearch disabledButton={disabledButton} />
        <Filter />
      </div>
    </section>
  );
};
