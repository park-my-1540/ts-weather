import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { sprinkles } from '@/styles/common/sprinkles.css'; // sprinkles import
import localStorageState from '@/recoil/atoms/searchAtom';
import { isEmpty } from '@/util/util';
import { CityNameType } from '@/types/city';
import NoResult from '@/components/setting/Search/NoResult';
import RecentResult from '@/components/setting/Search/RecentResult';
import { ListBox } from '@/components/setting/Search/SearchList';

interface SearchResultProps {
  isOpen: boolean;
  list: string[];
  setWord: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchResult = ({
  isOpen,
  list,
  setWord,
  setIsOpen,
}: SearchResultProps) => {
  const searchStateAtom = useRecoilValue(localStorageState);
  const [recentCitys, setRecentCitys] = useState<
    { city: CityNameType; date: string }[]
  >([]);

  // localStorage에서 값을 가져옴.
  useEffect(() => {
    const storedData = localStorage.getItem('searchData');
    if (storedData) {
      setRecentCitys(JSON.parse(storedData));
    }
  }, [searchStateAtom]);

  const deleteHistory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const targetItem = e.currentTarget
        .closest('li')
        ?.getAttribute('data-city');
      const tempCitys = Object.values(recentCitys).filter((x) => {
        return x.city !== targetItem;
      });
      setRecentCitys(tempCitys);
      localStorage.setItem('searchData', JSON.stringify(tempCitys));
    },
    [],
  );

  const selectCity = useCallback((item: string) => {
    setIsOpen(false);
    setWord(item);
  }, []);

  const deleteAll = useCallback(() => {
    localStorage.removeItem('searchData');
    setRecentCitys([]); // 해야 컴포넌트 리렌더링 된답니다.
  }, []);

  const update = useCallback((city: CityNameType) => {
    setWord(city);
  }, []);

  if (!isOpen) return null;

  let content;
  if (!isEmpty(list)) {
    content = <ListBox list={list} selectCity={selectCity} />;
  } else if (recentCitys.length < 1) {
    content = <NoResult />;
  } else {
    content = (
      <RecentResult
        deleteAll={deleteAll}
        list={recentCitys}
        update={update}
        deleteHistory={deleteHistory}
      />
    );
  }
  return <div className={`${sprinkles({ padding: 'large' })}`}>{content}</div>;
};

export default SearchResult;
