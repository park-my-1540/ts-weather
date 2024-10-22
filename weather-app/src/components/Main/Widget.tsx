import { Position } from "@/components/Position";
import { Text } from "@/components/Text";
import { IconText } from '@/components/IconText';
import { faSun } from '@fortawesome/free-solid-svg-icons'


const Widget: React.FC = () => (
<Position position="absolute" top="40%" right="30%">
    <div>
        <Text sizes="large" colors="accent" textAlign="center">Rain<IconText icon={faSun} fontSize="40px" color='accent'/></Text>
        <Text sizes="big" colors="accent" weights="bold">15
            <Text sizes="largeX2" weights="bold" vertical="textTop" display="inlineBlock" colors="accent">ºC</Text>
        </Text>
    </div>
</Position>
);

export default Widget;