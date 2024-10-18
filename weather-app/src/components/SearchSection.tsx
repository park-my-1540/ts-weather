import { ThemeColor } from "@/types/styles"
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { flexRowBetween } from "@/styles/components/flexbox.css";

interface InputSectionProps {
  activeTheme?: string;
}
const InputSection: React.FC<InputSectionProps> = ({ activeTheme }) => (
  <div className={flexRowBetween}>
    <Input 
      id="1"
      size="medium"
      placeholder="Search City ex) Seoul"
      onChange={() => console.log('꾹')}
    />
    <Button theme={ activeTheme } color="primary" size="medium" rounded onClick={() => alert('Clicked!')}>
      Update
    </Button>
  </div>
);

export default InputSection;