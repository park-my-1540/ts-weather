import { Text } from "@/components/Text";
import { Position } from "@/components/Position";
import { IconText } from '@/components/IconText';
import * as styles from '@/styles/components/main.css';
import { faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { sprinkles } from "@/styles/common/sprinkles.css"; // sprinkles import

const Header: React.FC = () => (
<header>
    <div className={ `${sprinkles({ paddingTop: 'medium' })} ${styles.mainInfo}`}>
        <Text sizes="large" color="accent"><IconText icon={faLocationDot} fontSize="24px" color='accent' style={{'paddingRight':10}}/>Seoul</Text>
        <Text sizes="small" color="accent">10.22.2024</Text>
    </div>
    <Position position="absolute" top="18px" right="14px" className={styles.settingMenuIcon}>
        <Link href="/settings">
            <IconText icon={faBars} fontSize="24px" color="accent"></IconText>
        </Link>
    </Position>
</header>
);

export default Header;
