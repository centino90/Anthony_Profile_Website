import theme from '@/theme';
import { hexToRgba } from '@/util';
import styled from 'styled-components';

export const Chip = styled.span`
  font-size: ${theme.fontSize.code};
  font-weight: 500;
  background-color: ${hexToRgba(theme.colors.secondary200, .1)};
  color: ${theme.colors.secondary200};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;
