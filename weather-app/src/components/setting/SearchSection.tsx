import React, { useState, useEffect, useCallback } from "react";
import { ThemeColor } from "@/types/styles"
import { Input } from "@/components/atom/Input";
import { Button } from "@/components/atom/Button";
import  SearchResult  from "@/components/setting/SearchResult";
import  Flex  from "@/components/atom/Flex";
import { Position } from "@/components/atom/Position";
import { searchResultBox } from "@/styles/components/search.css";
import { localStorageState } from "@/recoil/atoms/searchAtom";
import { queryState } from "@/recoil/atoms/queryAtom";
import { useRecoilState } from 'recoil';
import { cityList } from "@/json/citylist"
import { isEmpty } from "@/util/util";
import Modal from "@/components/modal/ModalAction";
import { CityNameType } from "@/types/city";


interface InputSectionProps {
  activeTheme: ThemeColor;
}

const InputSection: React.FC<InputSectionProps> = ({ activeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [word, setWord] = useState(''); // input value
  const [searchState, setSearchState] = useRecoilState(localStorageState);
  const [, setQueryState] = useRecoilState(queryState);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(true); // 유효성 검사 상태
  const [, setRecentCitys] = useState<{ city: CityNameType; date: string }[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('searchData');
    if (storedData) {
      setRecentCitys(JSON.parse(storedData));
    }
  }, []);

  // 입력 값이 없으면 버튼 비활성화, 닫기
  useEffect(() => {
    setIsValid(!isEmpty(word) && isCityName(word));
    setIsOpen(!isEmpty(word))
  }, [filterList, word]);

  const date = useCallback(() => {
    const today = new Date();
    return `${today.getMonth() + 1}.${today.getDate()}`
  },[])


  function isCityName(word: string): word is CityNameType {
    return cityList.some((city) => city.name === word);
  }
  
  /**
   * 로컬 스토리지 업데이트 후 인풋 닫기
   */
  const update = useCallback(() => {

    if(!isCityName(word)) { return }
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

    const match = cityList.filter((item)=> word === item.name)
    const { lon,lat } = match[0].coord;
    
    setQueryState({
      unit: "metric", 
      city: word,
      lat: lat,
      lon: lon,
    });
    Modal.open('Update!')
  },[word]);

/**
 * 이 함수는 어떤 작업을 수행합니다.
 * @param {string} word - 처리할 단어
 * @returns {void}
 */
  const filterWord = useCallback((word:string) => {
    setWord(word);

    let array:string[] = [];
    const filterCity = cityList.filter(function (element) {
      //해당 단어와 매치된 도시
      const lowerEle = element.name.toLowerCase();
      const lowerVal = word.toLowerCase();
      return lowerEle.includes(lowerVal);
    });

    if (filterCity) {
      filterCity.map((city) => {
        const name = city.name;
        const value = word.toLowerCase();

        if(!isEmpty(word) && name.toLowerCase().startsWith(value, 0)) {
          array.push(name);
          array = array.filter((element, index) => array.indexOf(element) === index);//중복 제거
        }
        setFilterList(array);
      })
    }
  },[word])

  const clickInput = useCallback(() => {
    setIsOpen((prev) => !prev)
  },[word])

  return (
    <Flex direction="row" align="center" justify="between" gap="small">
      <Input
        id="1"
        value = {word}
        size="medium"
        placeholder="Search City ex) Seoul"
        onChange={(e) => filterWord(e.currentTarget.value)}
        onClick={clickInput}
      />
      <Button theme={activeTheme} color="primary" size="medium" disabled={!isValid} rounded onClick={() => update()}>
        Update
      </Button>

      <Position position="absolute" top={70} className={searchResultBox}>
        <SearchResult setWord={setWord} setIsOpen={setIsOpen} isOpen={isOpen} list={filterList}/>
      </Position>
    </Flex>
  );
};

export default InputSection;