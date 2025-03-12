import { createElement } from 'react';
import styled from 'styled-components';

export const DynamicTypography = styled(({ tag, children, ...props }) => createElement(tag, props, children))``;

export const BasicTitle = styled.h2<{ $margin?: string }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.text};
  margin: ${(props) => props.$margin || '0'};
`;

export const BasicParagraph = styled.p<{ $margin?: string }>`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  margin: ${(props) => props.$margin || '0'};
  color: ${(props) => props.theme.text};
`;

export const GrayParagraph = styled(BasicParagraph)`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.grayParagraph};
`;
export const PurpleParagraph = styled(BasicParagraph)`
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.accent};
`;
