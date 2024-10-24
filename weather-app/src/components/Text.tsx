import React from 'react';
import { text, TextVariantProps } from '@/styles/components/texts.css';
import { textColor, TextColorVariantProps } from '@/styles/common/theme.css';

type TextProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Text = ({
  sizes = 'medium',
  weights = 'normal',
  vertical,
  textAlign,
  display,
  color,
  children,
  ...rest
}: TextProps & Partial<TextVariantProps & TextColorVariantProps>) => {

  return (
    <p {...rest} className={ `${text({sizes, weights, display, vertical, textAlign })} ${textColor({color})}`}>
      {children}
    </p>
  );
};

export const TextLink = ({
  sizes = 'medium',
  weights = 'normal',
  vertical,
  textAlign,
  display,
  color,
  children,
  ...rest
}: TextProps & Partial<TextVariantProps & TextColorVariantProps>) => {

  return (
    <a href='#none' {...rest} className={ `${text({sizes, weights, display, vertical, textAlign })} ${textColor({color})}`}>
      {children}
    </a>
  );
};
