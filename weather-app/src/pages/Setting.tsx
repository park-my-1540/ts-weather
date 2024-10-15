import { useState } from 'react';
import { setting, header, container } from "@/styles/style.css";
import { lightTheme, darkTheme } from "@/styles/createThemeContract.css";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";


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
            <Input 
                id="1"
                widthSize="medium"
                placeholder="Search City ex) Seoul"
                onChange={(()=>console.log('꾹'))}
             />
            <Button theme="blue" color="accent" size="medium" rounded onClick={() => alert('Clicked!')}>
              update
            </Button>
        </div>
      </div>
    </>
  );
}
