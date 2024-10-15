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
      <Button 
        value="dark"
        fontSize ="small"
        onClick={() => setIsDarkMode(!isDarkMode)}
        theme="blue"></Button>
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
             <Button 
                value="update"
                fontSize ="small"
                onClick={(()=>console.log('꾹'))}
                theme="blue"></Button>
        </div>
      </div>
    </>
  );
}
