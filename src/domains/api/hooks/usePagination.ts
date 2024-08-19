import { useState } from 'react';

export const usePagination = (initialCursor = "0", pageSize = "20") => {
  const [cursor, setCursor] = useState(initialCursor);

  const nextPage = (nextCursor) => {
    setCursor(nextCursor);
  };

  const paginationParams = {
    cursor,
    take: pageSize,
  };

  return { nextPage, paginationParams };
};