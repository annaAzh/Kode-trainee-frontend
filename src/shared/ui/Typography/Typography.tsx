import { CSSProperties, FC } from 'react';
import * as S from './Typography.styles';

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps extends CSSProperties {
  tag?: TagVariants;
  children: React.ReactNode;
}

const Typography: FC<TypographyProps> = ({ tag = 'p', children, ...props }) => (
  <S.DynamicTypography tag={tag} style={{ ...props }}>
    {children}
  </S.DynamicTypography>
);

export { Typography };
