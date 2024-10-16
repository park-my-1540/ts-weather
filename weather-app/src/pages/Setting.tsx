import { useState } from 'react';
import { setting, header, container, itemBox } from "@/styles/style.css";
import { flexRowBetween } from "@/styles/components/flexbox.css";
import { lightTheme, darkTheme } from "@/styles/common/createThemeContract.css";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { RadioButton } from "@/components/CustomRadio";
import { Text } from "@/components/Text";
import { IconText } from '@/components/IconText';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Setting() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <div className={`${isDarkMode ? darkTheme : lightTheme} ${setting}`}>
        <Button theme="blue" color="accent" size="medium" rounded onClick={() => setIsDarkMode(!isDarkMode)}>
            dark
        </Button>
        <div className={header}>
            <h2>Settings</h2>
        </div>

        <div className={container}>
          <div className={flexRowBetween}>
            <Input 
                id="1"
                size="medium"
                placeholder="Search City ex) Seoul"
                onChange={(()=>console.log('꾹'))}
             />
            <Button theme="blue" color="accent" size="medium" rounded onClick={() => alert('Clicked!')}>
              update
            </Button>
          </div>

          <ul>
            <li>
              <div className={`${itemBox} ${flexRowBetween}`}>
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
              <div className={`${itemBox} ${flexRowBetween}`}>
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
              <div className={`${itemBox} ${flexRowBetween}`}>
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
              <div className={`${itemBox} ${flexRowBetween}`}>
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
          </ul>

          

        </div>
      </div>
    </>
  );
}
