import styled from 'styled-components';
import * as Shared from 'styles/shared';

export const RoundedSquareButton = styled.button`
  padding: 0.9rem 2.25rem;
  border: 1px solid ${props => props.theme.highlight};
  font-size: 0.9rem;
  line-height: 1rem;
  border-radius: 0.25rem;
`;

export const TagSectionContents = styled(Shared.SubSectionContents)`
  flex-direction: column;
`;

export const CodeSectionContainer = styled.div`
  display: flex;
  flex: 1 1;

  & > * {
    flex: 1 1;
    width: 100%;
  }
`;
