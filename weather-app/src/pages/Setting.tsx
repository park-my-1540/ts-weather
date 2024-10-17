import { useState } from 'react';
import * as styles from "@/styles/style.css";
import { flexRowBetween, flexRowAround } from "@/styles/components/flexbox.css";
import { lightTheme, darkTheme } from "@/styles/common/createThemeContract.css";
import { Input } from "@/components/Input";
import { Button, ThemeButton } from "@/components/Button";
import { RadioButton } from "@/components/CustomRadio";
import { Text } from "@/components/Text";
import { Position } from "@/components/Position";
import { IconButton, IconText } from '@/components/IconText';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Setting() {

  const themes = ['lime', 'green', 'blue', 'purple']; // 버튼 테마 목록
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeButton, setActiveButton] = useState<string | null>(null); // 선택된 버튼의 id 관리
  const handleActiveTheme = (id: string) => {
    setActiveButton((prev) => (prev === id ? null : id)); // 동일한 버튼을 클릭하면 비활성화
  };

  return (
    <>
      <div className={`${isDarkMode ? darkTheme : lightTheme} ${styles.setting}`}>
        <div className={`${styles.header} ${flexRowBetween}`}>
            <h2>Settings</h2>
            <IconButton icon={faClose} color='accent' size="large"  onClick={() => alert('Close!')}/>
        </div>

        <div className={styles.container}>
          <div className={flexRowBetween}>
            <Input 
                id="1"
                size="medium"
                placeholder="Search City ex) Seoul"
                onChange={(()=>console.log('꾹'))}
             />
            <Button theme="blue" color="primary" size="medium" rounded onClick={() => alert('Clicked!')}>
              Update
            </Button>
          </div>

          <ul>
            <li>
              <div className={`${styles.itemBox} ${flexRowBetween}`}>
                <Text weights='bold'>Tempearature Unit</Text>
                <RadioButton 
                    id="unit" 
                    theme="blue">
                      <RadioButton.Left>°F</RadioButton.Left>
                      <RadioButton.Right>°F</RadioButton.Right>
                </RadioButton>
              </div>
              <Text sizes="small" colors="tertiary">Choose between ºC or ºF.</Text>
            </li>
            <li>
              <div className={`${styles.itemBox} ${flexRowBetween}`}>
                <Text weights='bold'>Sunrise/Sunset</Text>
                <RadioButton 
                    id="atmo" 
                    theme="blue">
                      <RadioButton.Left><IconText icon={faCheck} color='accent'/></RadioButton.Left>
                      <RadioButton.Right><IconText icon={faClose} color='accent'/></RadioButton.Right>
                </RadioButton>
              </div>
              <Text sizes="small" colors="tertiary">
                Humidity, pressure and visibility of the atmosphere.
              </Text>
            </li>
            <li>
              <div className={`${styles.itemBox} ${flexRowBetween}`}>
                <Text weights='bold'>Atmospheric Conditions</Text>
                <RadioButton 
                    id="sun" 
                    theme="blue">
                      <RadioButton.Left><IconText icon={faCheck} color='accent'/></RadioButton.Left>
                      <RadioButton.Right><IconText icon={faClose} color='accent'/></RadioButton.Right>
                </RadioButton>
              </div>
              <Text sizes="small" colors="tertiary">Sunset/Sunrise hours and total hours of light.</Text>
            </li>
            <li>
              <div className={`${styles.itemBox} ${flexRowBetween}`}>
                <Text weights='bold'>Wind Conditions</Text>
                <RadioButton 
                    id="wind" 
                    theme="blue">
                      <RadioButton.Left><IconText icon={faCheck} color='accent'/></RadioButton.Left>
                      <RadioButton.Right><IconText icon={faClose} color='accent'/></RadioButton.Right>
                </RadioButton>
              </div>
              <Text sizes="small" colors="tertiary">Chill, direction and the speed of the wind.</Text>
            </li>
            <li>
              <div className={`${styles.itemBox}`}>
                <Text weights='bold'>Choose a theme</Text>
                <div className={`${flexRowAround}`}>
                {themes.map((color) => (
                <ThemeButton
                  key={color}
                  theme={color}
                  isActive={activeButton === color} // 활성화 여부 전달
                  onClick={() => handleActiveTheme(color)} // 클릭 핸들러 전달
                />
              ))}
                </div>
              </div>
              <Text sizes="small" colors="tertiary">Select the desired theme. Press the "Save" button to update the theme!</Text>
            </li>
            <li>
              <div className={`${styles.itemBox} ${flexRowBetween}`}>
                <Text weights='bold'>darkTheme</Text>
                <RadioButton 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    id="wind" 
                    theme="blue">
                      <RadioButton.Left><IconText icon={faCheck} color='accent'/></RadioButton.Left>
                      <RadioButton.Right><IconText icon={faClose} color='accent'/></RadioButton.Right>
                </RadioButton>
              </div>
            </li>
          </ul>

          <Position position="absolute" bottom="20px" className={styles.buttonWrap}>
            <Button theme="blue" color="primary" size="large" rounded onClick={() => alert('Clicked!')}>
              Save
            </Button>
          </Position>
        </div>
      </div>
    </>
  );
}
