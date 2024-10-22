import React from 'react';
import { text, TextVariantProps } from '@/styles/components/texts.css';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';

type TextProps = {
  children: React.ReactNode;
};

export const Text = ({
  sizes = 'medium',
  weights = 'normal',
  vertical,
  textAlign,
  display,
  color,
  children,
}: TextProps & Partial<TextVariantProps & TextColorVariantProps>) => {

  return (
    <p className={ `${text({sizes, weights, display, vertical, textAlign })} ${textColor({color})}`}>
      {children}
    </p>
  );
};