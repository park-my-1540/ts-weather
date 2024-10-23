import Header  from "@/components/main/Header";
import Widget  from "@/components/main/Widget";
import Weather  from "@/components/main/Weather";
import { optionState } from '@/recoil/atoms/optionAtom';
import { baseStyle, themeVariants } from '@/styles/components/main.css';
import { useRecoilValue } from 'recoil';

export default function Main() {
    const activeTheme = useRecoilValue(optionState); // 현재 테마 값 가져오기
    
    return (
    <div className={`${baseStyle} ${themeVariants[activeTheme.highlightColor]}`}>
        <Header/>
        <Widget/>
        <Weather/>
    </div>
    );
  }
