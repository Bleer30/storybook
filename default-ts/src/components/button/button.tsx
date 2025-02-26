import { ComponentProps } from 'react';
import clsx from 'clsx';
import styles from './button.module.css?url';

export type ButonProps = ComponentProps<'button'> & {
  variants: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({
  variants = 'primary',
  size = 'medium',
  className,
  ...props
}: ButonProps) => {
  let classes = clsx(styles.button, styles[variants], className);

  return <button className={classes} {...props} />;
};
