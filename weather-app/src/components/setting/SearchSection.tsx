import React, { useState } from "react";
import { ThemeColor } from "@/types/styles"
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import  SearchResult  from "@/components/setting/SearchResult";
import  Flex  from "@/components/Flex";
import { Position } from "@/components/Position";
import { searchResultBox } from "@/styles/components/search.css";

interface InputSectionProps {
  activeTheme: ThemeColor;
}

const InputSection: React.FC<InputSectionProps> = ({ activeTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [word, setWord] = useState('');

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
      <Button theme={activeTheme} color="primary" size="medium" rounded onClick={() => alert('Clicked!')}>
        Update
      </Button>

      <Position position="absolute" top={70} className={searchResultBox}>
        <SearchResult isOpen={isOpen} />
      </Position>
    </Flex>
  );
};

export default InputSection;