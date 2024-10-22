import { Text } from "@/components/Text";
import { Position } from "@/components/Position";
import { IconButton } from '@/components/IconText';
import * as styles from '@/styles/components/main.css';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => (
<header>
    <div className={styles.mainInfo}>
        <Text sizes="large" colors="accent">Seoul</Text>
        <Text sizes="small" colors="accent">10.22.2024</Text>
    </div>
    <Position position="absolute" top="18px" right="14px" className={styles.settingMenuIcon}>
        <IconButton icon={faBars} fonstSize="24px" onClick={()=> console.log('sdf')}></IconButton>
    </Position>
</header>
);

export default Header;
