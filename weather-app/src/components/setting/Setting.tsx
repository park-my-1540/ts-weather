import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue, useRecoilState } from 'recoil';
import * as styles from '@/styles/style.css';
import tempState, { optionState } from '@/recoil/atoms/optionAtom';
import { lightTheme, darkTheme } from '@/styles/common/createThemeContract.css';
import { Button } from '@/components/atom/Button';
import SettingHeader from '@/components/setting/SettingHeader';
import SearchSection from '@/components/setting/Search/SearchSection';
import SettingList from '@/components/setting/SettingList';
import Position from '@/components/atom/Position';
import Modal from '@/components/modal/ModalAction';

export default function Setting() {
  const currentTheme = useRecoilValue(tempState); // 현재 테마 값 가져오기
  const [options, setOptions] = useRecoilState(optionState);
  const [tempOptions, setTempOptions] = useRecoilState(tempState);
  const router = useRouter();

  const saveOptions = useCallback(() => {
    setTempOptions(tempOptions);
    setOptions(tempOptions);
    Modal.open('Save');
  }, [tempOptions]);

  const handleGoHome = useCallback(() => {
    router.push('/');
    setTempOptions(options);
    setOptions(options);
  }, [options]);

  return (
    <div
      className={`${currentTheme.mode === 'dark' ? darkTheme : lightTheme} ${styles.setting}`}
    >
      <SettingHeader onClose={handleGoHome} />

      <div className={styles.container}>
        <SearchSection activeTheme={currentTheme.highlightColor} />
        <SettingList />
        <Position
          position="absolute"
          bottom="20px"
          className={styles.buttonWrap}
        >
          <Button
            theme={currentTheme.highlightColor}
            color="primary"
            size="large"
            rounded
            onClick={saveOptions}
          >
            Save
          </Button>
        </Position>
      </div>
    </div>
  );
}
