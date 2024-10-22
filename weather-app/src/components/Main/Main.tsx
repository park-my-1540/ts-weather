import Header  from "@/components/Main/Header";
import Widget  from "@/components/Main/Widget";
import { optionState } from '@/recoil/atoms/optionAtom';
import { baseStyle, themeVariants } from '@/styles/components/main.css';
import { useRecoilValue } from 'recoil';

export default function Main() {
    const activeTheme = useRecoilValue(optionState); // 현재 테마 값 가져오기
    
    return (
    <div className={`${baseStyle} ${themeVariants[activeTheme.highlightColor]}`}>
        <Header/>
        <Widget/>
    </div>
    );
  }
  