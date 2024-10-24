import React, { useState, useEffect } from "react";
import { Text, TextLink } from "@/components/Text";
import { IconText } from "../IconText";
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'
import  Flex  from "@/components/Flex";
import { sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import

interface SearchResultProps {
  isOpen : boolean,
  }
const SearchResult = ({
  isOpen,
}: SearchResultProps) => {

    const [recentCitys, setRecentCitys] = useState<{ city: string; date: string }[]>([]);
    // localStorage에서 값을 가져옴.
    useEffect(() => {
      const storedData = localStorage.getItem('searchData');
      if (storedData) {
        setRecentCitys(JSON.parse(storedData));
      }
    }, []);
  
    return (
      isOpen && (
        <div className={`${sprinkles({ padding: 'large' })}`}>
            <div className="list recent">
                <Flex direction="row" align="center" justify="between" gap="small" className="title">
                    <Text color="textSecondary">최근검색어</Text>
                    <TextLink color="tertiary" sizes ="small" >전체삭제</TextLink>
                </Flex>
            </div>

            <ul className={`${sprinkles({ paddingTop: 'large' })}`}>
              { recentCitys.map((item, index)=> (
                  <li key={index}>
                    <Flex direction="row" align="center" justify="between" gap="small" className="title">
                      <TextLink color="textInfo" sizes ="smallmedium"><IconText icon={faSearch} style={{paddingRight : 5}}></IconText>{item.city}</TextLink>
                      <Text color="textInfo" sizes="medium">{item.date}<IconText style={{paddingLeft : 5}} color="textInfo" icon={faClose}></IconText></Text>
                    </Flex>
                  </li>
              ))}
            </ul>

            <div className={`${sprinkles({ paddingY: 'large' })}`}>
              <Text textAlign="center" color="textSecondary">
                일치하는 검색어가 없습니다.<br/>
                검색어를 확인해주세요.
              </Text>
            </div>
        </div>
      )
    );
}
  
export default SearchResult;