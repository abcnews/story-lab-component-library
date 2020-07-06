import React, { PropsWithChildren } from 'react';
import styles from './EmbedContainer.module.scss';

/**
 * EmbedContainer props
 */
export interface IEmbedContainerProps {
  /** Defines the embed style and position */
  embed?: 'full' | 'right';
  /** An additional className string added to the property for custom styling */
  className?: string;
}

export type EmbedContainerProps = PropsWithChildren<IEmbedContainerProps>;
export type EmbedContainerComponent = React.FC<EmbedContainerProps>;

/**
 * Use `EmbedContainer` to mimic the style of embedded components in Presentation Layer.
 */
export const EmbedContainer: EmbedContainerComponent = ({
  children,
  embed,
  className,
}: EmbedContainerProps) => {
  const cns = [styles.embedContainer];
  if (embed === 'right') cns.push(styles.right);
  if (embed === 'full') cns.push(styles.full);
  if (className) cns.push(className);
  return <aside className={cns.join(' ')}>{children}</aside>;
};
