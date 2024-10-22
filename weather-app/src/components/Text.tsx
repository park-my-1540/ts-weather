import React from 'react';
import { text, TextVariantProps } from '@/styles/components/texts.css';

type TextProps = {
  children: React.ReactNode;
};

export const Text = ({
  sizes = 'medium',
  weights = 'normal',
  vertical,
  textAlign,
  display,
  colors,
  children,
}: TextProps & Partial<TextVariantProps>) => {
    

  return (
    <p className={text({ colors, sizes, weights, display, vertical, textAlign })}>
      {children}
    </p>
  );
};