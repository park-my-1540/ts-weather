import * as styles from "@/styles/style.css";
import { ThemeColor } from "@/types/styles"
import { themeState } from '@/recoil/atoms/themeAtom'; // Recoil atom import
import { lightTheme, darkTheme } from "@/styles/common/createThemeContract.css";
import { Button } from "@/components/Button";
import SettingHeader  from "@/components/SettingHeader";
import SearchSection  from "@/components/SearchSection";
import SettingList  from "@/components/SettingList";
import { Position } from "@/components/Position";
import { useRecoilValue } from 'recoil';

export default function Setting() {
  const currentTheme = useRecoilValue(themeState); // 현재 테마 값 가져오기
  return (
    <>
      <div className={`${currentTheme.mode ==='dark' ? darkTheme : lightTheme} ${styles.setting}`}>
        <SettingHeader onClose={() => alert('Close!')}/>

        <div className={styles.container}>
          <SearchSection activeTheme = {currentTheme.highlightColor}/>
          <SettingList/>
      
          <Position position="absolute" bottom="20px" className={styles.buttonWrap}>
            <Button theme={currentTheme.highlightColor} color="primary" size="large" rounded onClick={() => alert('Clicked!')}>
              Save
            </Button>
          </Position>
        </div>
      </div>
    </>
  );
}
