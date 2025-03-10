import React from 'react';
import { faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { Text } from '@/components/atom/Text';
import Position from '@/components/atom/Position';
import { IconText } from '@/components/atom/IconText';
import * as styles from '@/styles/components/main.css';
import { sprinkles } from '@/styles/common/sprinkles.css'; // sprinkles import
import queryState from '@/recoil/atoms/queryAtom';
import { currentDate } from '@/util/util';
/**
 *
 * React.FC 사용형태
 * childeren속성을 자동으로 포함하여 자식요소를 받을수 있다 -> 자식이 있을때 유용
 */
const Header: React.FC = () => {
  const { city } = useRecoilValue(queryState); // useRecoilValue를 함수 내부로 이동

  return (
    <header>
      <div
        className={`${sprinkles({ paddingTop: 'medium' })} ${styles.mainInfo}`}
      >
        <Text sizes="large" color="accent">
          <IconText
            icon={faLocationDot}
            fontSize="24px"
            color="accent"
            style={{ paddingRight: 10 }}
          />
          {city}
        </Text>
        <Text sizes="small" color="accent">
          {currentDate()}
        </Text>
      </div>
      <Position
        position="absolute"
        top="18px"
        right="14px"
        className={styles.settingMenuIcon}
      >
        <Link href="/settings">
          <IconText icon={faBars} fontSize="24px" color="accent"></IconText>
        </Link>
      </Position>
    </header>
  );
};

export default Header;
