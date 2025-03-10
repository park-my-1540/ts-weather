import React from 'react';
import { useRecoilValue } from 'recoil';
import { device } from '@/styles/style.css';
import { optionState } from '@/recoil/atoms/optionAtom'; // Recoil atom import
import { lightTheme, darkTheme } from '@/styles/common/createThemeContract.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const currentTheme = useRecoilValue(optionState); // 현재 테마 값 가져오기
  return (
    <div
      className={`${currentTheme.mode === 'dark' ? darkTheme : lightTheme} ${device}`}
    >
      {children}
    </div>
  );
}
