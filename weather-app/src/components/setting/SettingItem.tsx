import React, { ReactNode } from 'react';
import * as styles from '@/styles/style.css';
import { flexRowBetween } from '@/styles/components/flexbox.css';
import { Text } from '@/components/atom/Text';

interface SettingItemProps {
  title: string;
  description?: string;
  flexDirection?: string;
  children: ReactNode;
}

const SettingItem = ({
  title,
  description,
  children,
  flexDirection = 'flexRowBetween',
}: SettingItemProps) => {
  return (
    <li>
      <div
        className={`${styles.itemBox} ${flexDirection === 'flexRowBetween' ? flexRowBetween : ''}`}
      >
        <Text weights="bold">{title}</Text>
        {children}
      </div>
      {description && (
        <Text sizes="small" color="tertiary">
          {description}
        </Text>
      )}
    </li>
  );
};

export default React.memo(SettingItem);
