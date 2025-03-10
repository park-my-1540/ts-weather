import {
  faCheck,
  faClose,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { flexRowAround } from '@/styles/components/flexbox.css';
import { ThemeButton } from '@/components/atom/Button';
import { ThemeColor } from '@/types/styles';
import SettingItem from '@/components/setting/SettingItem';
import RadioButtonGroup from '@/components/atom/RadioButtonGroup';
import { IconText } from '@/components/atom/IconText';
import tempState, { HighlightColor } from '@/recoil/atoms/optionAtom'; // Recoil atom import

export default function ListItem() {
  const themes: ThemeColor[] = ['lime', 'green', 'blue', 'purple'] as const; // 정확한 타입 설정
  const [tempOptions, setTempOptions] = useRecoilState(tempState);

  // darkmode or lightmode
  const toggleMode = () => {
    setTempOptions((prev) => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light',
    }));
  };

  const changeHighlightColor = (color: HighlightColor) => {
    setTempOptions((prev) => ({
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
            theme={tempOptions.highlightColor}
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
            theme={tempOptions.highlightColor}
            leftLabel={<IconText icon={faCheck} color="accent" />}
            rightLabel={<IconText icon={faClose} color="tertiary" />}
            onClick={() => console.log('Sunrise/Sunset Selected')}
          />
        </SettingItem>

        <SettingItem
          title="Atmospheric Conditions"
          description="Sunset/Sunrise hours and total hours of light."
        >
          <RadioButtonGroup
            id="atmo"
            theme={tempOptions.highlightColor}
            leftLabel={<IconText icon={faCheck} color="accent" />}
            rightLabel={<IconText icon={faClose} color="tertiary" />}
            onClick={() => console.log('Sunrise/Sunset Selected')}
          />
        </SettingItem>
        <SettingItem
          title="Wind Conditions"
          description="Chill, direction and the speed of the wind."
        >
          <RadioButtonGroup
            id="wind"
            theme={tempOptions.highlightColor}
            leftLabel={<IconText icon={faCheck} color="accent" />}
            rightLabel={<IconText icon={faClose} color="tertiary" />}
            onClick={() => console.log('Sunrise/Sunset Selected')}
          />
        </SettingItem>
        <SettingItem flexDirection="flexRowAround" title="Choose a theme">
          <div className={flexRowAround} style={{ padding: '8px 0' }}>
            {themes.map((color) => (
              <ThemeButton
                key={color}
                theme={color}
                isActive={tempOptions.highlightColor === color}
                onClick={() => changeHighlightColor(color)}
              />
            ))}
          </div>
        </SettingItem>
        <SettingItem title="Choose a dark or light">
          <RadioButtonGroup
            id="dark"
            theme={tempOptions.highlightColor}
            onClick={toggleMode}
            leftLabel={<IconText icon={faSun} color="accent" />}
            rightLabel={<IconText icon={faMoon} color="tertiary" />}
          />
        </SettingItem>
      </ul>
    </>
  );
}
