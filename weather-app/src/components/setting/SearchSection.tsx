import React, { useState, useEffect } from "react";
import { ThemeColor } from "@/types/styles"
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import  SearchResult  from "@/components/setting/SearchResult";
import  Flex  from "@/components/Flex";
import { Position } from "@/components/Position";
import { searchResultBox } from "@/styles/components/search.css";
import { localStorageState } from "@/recoil/atoms/searchAtom";
import { useRecoilState } from 'recoil';

interface InputSectionProps {
  activeTheme: ThemeColor;
}

const InputSection: React.FC<InputSectionProps> = ({ activeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [word, setWord] = useState(''); // input value
  const [searchState, setSearchState] = useRecoilState(localStorageState);
  const [isValid, setIsValid] = useState(true); // 유효성 검사 상태
  const [, setRecentCitys] = useState<{ city: string; date: string }[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('searchData');
    if (storedData) {
      setRecentCitys(JSON.parse(storedData));
    }
  }, []);

  const date = () => {
    const today = new Date();
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜

    return `${month}.${date}`
  }

  // city update 후 localstorage, searchState 저장
  const update = () => {
    const newVal = {
      city : word,
      date : date()
    }
    
    const updatedLocalStorage = [...searchState, newVal];
    
    localStorage.setItem(
      "searchData",
      JSON.stringify(updatedLocalStorage)
    );

    setSearchState(updatedLocalStorage)
    setIsOpen(false)
  };

  useEffect(() => {
    // 입력 값이 없으면 버튼 비활성화
    setIsValid(word.trim().length > 0);
  }, [word]);

  return (
    <Flex direction="row" align="center" justify="between" gap="small">
      <Input
        id="1"
        value = {word}
        size="medium"
        placeholder="Search City ex) Seoul"
        onChange={(e) => setWord(e.currentTarget.value)}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <Button theme={activeTheme} color="primary" size="medium" disabled={!isValid} rounded onClick={() => update()}>
        Update
      </Button>

      <Position position="absolute" top={70} className={searchResultBox}>
        <SearchResult isOpen={isOpen}/>
      </Position>
    </Flex>
  );
};

export default InputSection;