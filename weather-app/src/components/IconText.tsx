import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Icon 타입 import

type IconTextProps = {
  icon: IconDefinition;  // 아이콘 종류를 props로 전달
  fontSize?: string;     // 아이콘 크기 조절
  color?: string;        // 아이콘 색상 조절
};

export const IconText: React.FC<IconTextProps> = ({
  icon,
  fontSize = '16px', // 기본 폰트 크기
  color = '#000',     // 기본 색상 (검정)
}) => {
  return (
      <FontAwesomeIcon icon={icon} style={{ fontSize, color }} />
  );
};

type IconButtonProps = {
  icon: IconDefinition;  // 아이콘 종류를 props로 전달
  size?: string;     // 아이콘 크기 조절
  color?: string;        // 아이콘 색상 조절,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'medium', // 기본 폰트 크기
  color = '#000',     // 기본 색상 (검정)
  onClick
}) => {
  return (
    <button type="button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} style={{ size, color }} />
    </button>
  );
};
