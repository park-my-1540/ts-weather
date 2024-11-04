import React, { useState, useEffect } from "react";
import { Text, TextLink } from "@/components/Text";
import { IconText, IconButton } from "../IconText";
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'
import  Flex  from "@/components/Flex";
import { sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import
import { localStorageState } from "@/recoil/atoms/searchAtom";
import { useRecoilValue } from 'recoil';

interface SearchResultProps {
  isOpen : boolean,
  }
const SearchResult = ({
  isOpen,
}: SearchResultProps) => {
  const searchStateAtom = useRecoilValue(localStorageState);
  const [recentCitys, setRecentCitys] = useState<{ city: string; date: string }[]>([]);
  // localStorage에서 값을 가져옴.
  useEffect(() => {
    const storedData = localStorage.getItem('searchData');
    if (storedData) {
      setRecentCitys(JSON.parse(storedData));
    }
  }, [searchStateAtom]);


    const deleteHistory = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const targetItem = e.currentTarget.closest('li')?.getAttribute('data-city');
      const tempCitys = Object.values(recentCitys).filter((x) => {
        return x.city !== targetItem;
      });
      setRecentCitys(tempCitys);
      localStorage.setItem("searchData", JSON.stringify(tempCitys));
    }

    const deleteAll = () => {
      localStorage.removeItem("searchData");
      setRecentCitys([]); //해야 컴포넌트 리렌더링 된답니다.
    }
  
    return (
      isOpen && (
        <div className={`${sprinkles({ padding: 'large' })}`}>
            <div className="list recent">
                <Flex direction="row" align="center" justify="between" gap="small" className="title">
                    <Text color="textSecondary">최근검색어</Text>
                    <TextLink color="tertiary" sizes ="small" onClick={deleteAll}>전체삭제</TextLink>
                </Flex>
            </div>

            <ul className={`${sprinkles({ paddingTop: 'large' })}`}>
              { recentCitys.map((item, index)=> (
                  <li key={index} data-city={item.city}>
                    <Flex direction="row" align="center" justify="between" gap="small" className="title">
                      <TextLink onClick={deleteAll} color="textInfo" sizes ="mediumlarge"><IconText icon={faSearch} style={{paddingRight : 5}}></IconText>{item.city}</TextLink>
                      <Text color="textInfo" sizes="medium">{item.date}<IconButton style={{paddingLeft : 5}} color="textInfo" icon={faClose} onClick = {(e)=> deleteHistory(e)}></IconButton></Text>
                    </Flex>
                  </li>
              ))}
            </ul>

            {
              recentCitys.length < 1 && (
              <div className={`${sprinkles({ paddingY: 'large' })}`}>
                <Text textAlign="center" color="textSecondary">
                  일치하는 검색어가 없습니다.<br/>
                  검색어를 확인해주세요.
                </Text>
              </div>
              )
            }
        </div>
      )
    );
}
  
export default SearchResult;