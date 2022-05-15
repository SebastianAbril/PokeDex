import { useEffect, useState } from 'react';

const PAGE_SIZE = 9;

export const usePaginationList = (data, searchedPokemon) => {
  const [sliceDate, setSliceDate] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const prev = () => {
    if (pageNumber - 1 < 0) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };
  const next = () => {
    if (pageNumber + 1 >= data.lenght) {
      return;
    }
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    setPageNumber(0);
  }, [searchedPokemon]);

  useEffect(() => {
    if (!data) return;

    const dataForPagination = data.filter((pokemon) => {
      return pokemon.name.includes(searchedPokemon);
    });

    const firstIndex = pageNumber * PAGE_SIZE;
    const lastIndex = pageNumber * PAGE_SIZE + PAGE_SIZE;

    const newData = dataForPagination.slice(firstIndex, lastIndex);

    setSliceDate(newData);
  }, [pageNumber, data, searchedPokemon]);

  return [sliceDate, prev, next];
};
