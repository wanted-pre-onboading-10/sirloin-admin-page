import styled from 'styled-components';

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.75rem;

  & > * + * {
    margin-top: 2rem;
  }
`;

export default ContentsContainer;
