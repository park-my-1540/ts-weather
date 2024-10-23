import { ThemeColor } from "@/types/styles"
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import  Flex  from "@/components/Flex";

interface InputSectionProps {
  activeTheme: ThemeColor;
}
const InputSection: React.FC<InputSectionProps> = ({ activeTheme }) => (
    <Flex direction="row" align="center" justify="between" gap="small">
    <Input 
      id="1"
      size="medium"
      placeholder="Search City ex) Seoul"
      onChange={() => console.log('꾹')}
    />
    <Button theme={ activeTheme } color="primary" size="medium" rounded onClick={() => alert('Clicked!')}>
      Update
    </Button>
  </Flex>
);

export default InputSection;