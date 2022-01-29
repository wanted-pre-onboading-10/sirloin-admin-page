import styled from 'styled-components';
import * as Shared from 'styles/shared';

export const SectionContents = styled(Shared.SubSectionContents)`
  border-top: 1px solid #ddd;
`;

export const SquareButton = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 0.9rem 2.25rem;
  border: 1px solid ${props => props.theme.highlight};
  font-size: 0.9rem;
  line-height: 1rem;
`;
