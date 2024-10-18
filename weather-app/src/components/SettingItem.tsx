import { ReactNode } from 'react';
import * as styles from "@/styles/style.css";
import { flexRowBetween, flexRowAround } from "@/styles/components/flexbox.css";
import { Text } from "@/components/Text";

interface SettingItemProps {
  title: string;
  description?: string;
  flexDirection?:string;
  children: ReactNode; // 다양한 UI를 자식으로 전달
}

export const SettingItem = ({
  title, description, children, flexDirection="flexRowBetween"
}: SettingItemProps) => {

  return (
    <>
      <li>
        <div className={`${styles.itemBox} ${flexDirection === "flexRowBetween" ? flexRowBetween: ''}`}>
          <Text weights='bold'>{title}</Text>
          {children}
        </div>
        {
          description && <Text sizes="small" colors="tertiary">{description}</Text>
        }
      </li>
    </>
  );
}
