import styled from 'styled-components';

export const CategoryList = styled.ul`
  padding: 1rem;
  border: 1px solid #e6e6e6;
  width: 60%;
  overflow-y: scroll;
  height: 240px;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const CategoryItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5%;
`;
