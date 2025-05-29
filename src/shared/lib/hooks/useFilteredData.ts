import { useMemo } from 'react';

type FilterConfig<T> = {
  data: T[] | undefined;
  filterValue: string | null;
  filterKey: string;
  defaultFilterValue?: string;
};

export const useFilteredData = <T>({
  data,
  filterValue,
  filterKey,
  defaultFilterValue = 'all',
}: FilterConfig<T>) => {
  return useMemo(() => {
    const items = data ?? [];

    return !filterValue || filterValue === defaultFilterValue
      ? items
      : items.filter((item) => {
          const value = filterKey.split('.').reduce<unknown>((obj, key) => {
            if (typeof obj === 'object' && obj !== null && key in obj) {
              return (obj as Record<string, unknown>)[key];
            }
            return undefined;
          }, item);
          return String(value).toLowerCase().trim() === filterValue.toLowerCase().trim();
        });
  }, [data, filterValue, filterKey, defaultFilterValue]);
};