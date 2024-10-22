import * as styles from "@/styles/style.css";
import { optionState, tempState } from '@/recoil/atoms/optionAtom'; // Recoil atom import
import { lightTheme, darkTheme } from "@/styles/common/createThemeContract.css";
import { Button } from "@/components/Button";
import SettingHeader  from "@/components/SettingHeader";
import SearchSection  from "@/components/SearchSection";
import SettingList  from "@/components/SettingList";
import { Position } from "@/components/Position";
import { useRecoilValue, useRecoilState } from 'recoil';

export default function Setting() {
  const currentTheme = useRecoilValue(tempState); // 현재 테마 값 가져오기
  const [options, setOptions] = useRecoilState(optionState);
  const [tempOptions, setTempOptions] = useRecoilState(tempState);

  const saveOptions = () => { 
    setTempOptions(tempOptions);
    setOptions(tempOptions)
  };

  return (
    <>
      <div className={`${currentTheme.mode ==='dark' ? darkTheme : lightTheme} ${styles.setting}`}>
        <SettingHeader onClose={() => alert('Close!')}/>

        <div className={styles.container}>
          <SearchSection activeTheme = {currentTheme.highlightColor}/>
          <SettingList/>
          <Position position="absolute" bottom="20px" className={styles.buttonWrap}>
            <Button theme={currentTheme.highlightColor} color="primary" size="large" rounded onClick={saveOptions}>Save</Button>
          </Position>
        </div>
      </div>
    </>
  );
}
