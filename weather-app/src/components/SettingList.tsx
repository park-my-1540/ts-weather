import { flexRowAround } from "@/styles/components/flexbox.css";
import { ThemeButton } from "@/components/Button";
import { ThemeColor } from "@/types/styles"
import {SettingItem} from "@/components/SettingItem"
import RadioButtonGroup from "./RadioButtonGroup";
import { IconText } from '@/components/IconText';
import { faCheck, faClose, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil';
import { themeState, HighlightColor } from '@/recoil/atoms/themeAtom'; // Recoil atom import


export default function ListItem() {

  const themes: ThemeColor[] = ['lime', 'green', 'blue', 'purple'] as const; // 정확한 타입 설정
  const [theme, setTheme] = useRecoilState(themeState);

  // darkmode or lightmode
  const toggleMode = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light',
    }));
  };

  const changeHighlightColor = (color: HighlightColor) => {
    setTheme((prev) => ({
      ...prev,
      highlightColor: color,
    }));
  };

  return (
    <>
      <ul>
          <SettingItem
            title="Temperature Unit"
            description="Choose between ºC or ºF."
          >
            <RadioButtonGroup
              id="unit"
              theme={theme.highlightColor}
              onClick={() => console.log('Temperature Unit Selected')}
              leftLabel="°C"
              rightLabel="°F"
            />
          </SettingItem>

          <SettingItem
            title="Sunrise/Sunset"
            description="Humidity, pressure and visibility of the atmosphere."
          >
            <RadioButtonGroup
              id="sun"
              theme={theme.highlightColor}
              leftLabel={<IconText icon={faCheck} color='accent'/>}
              rightLabel={<IconText icon={faClose} color='accent'/>}
              onClick={() => console.log('Sunrise/Sunset Selected')}
            />
          </SettingItem>

          <SettingItem
            title="Atmospheric Conditions"
            description="Sunset/Sunrise hours and total hours of light."
          >
            <RadioButtonGroup
              id="atmo"
              theme={theme.highlightColor}
              leftLabel={<IconText icon={faCheck} color='accent'/>}
              rightLabel={<IconText icon={faClose} color='accent'/>}
              onClick={() => console.log('Sunrise/Sunset Selected')}
            />
          </SettingItem>
          <SettingItem
            title="Wind Conditions"
            description="Chill, direction and the speed of the wind."
          >
            <RadioButtonGroup
              id="wind"
              theme={theme.highlightColor}
              leftLabel={<IconText icon={faCheck} color='accent'/>}
              rightLabel={<IconText icon={faClose} color='accent'/>}
              onClick={() => console.log('Sunrise/Sunset Selected')}
            />
          </SettingItem>
          <SettingItem
            flexDirection="flexRowAround"
            title="Choose a theme">
            <div className={flexRowAround}>
              {themes.map((color) => (
                <ThemeButton
                  key={color}
                  theme={color}
                  isActive={theme.highlightColor === color}
                  onClick={() => changeHighlightColor(color)}
                />
              ))}
            </div>
          </SettingItem>
          <SettingItem
            title="Choose a theme">
            <RadioButtonGroup
              id="theme"
              theme={theme.highlightColor}
              onClick={toggleMode}
              leftLabel={<IconText icon={faSun} color='accent'/>}
              rightLabel={<IconText icon={faMoon} color='accent'/>}
            />
          </SettingItem>
      </ul>
    </>
  );
}
