import { setting, header, container } from "@/styles/style.css";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Setting() {
  return (
    <>
      <div className={setting}>
        <div className={header}>
            <h2>Settings</h2>
        </div>
        <div className={container}>
            <Input 
                id="1"
                widthSize="medium"
                color="white"
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
