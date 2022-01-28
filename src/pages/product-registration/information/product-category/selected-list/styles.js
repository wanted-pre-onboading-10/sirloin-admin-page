import styled from 'styled-components';

const BasicList = styled.ul`
  padding: 1rem;
  border: 1px solid #e6e6e6;
  width: 40%;
  height: 240px;
`;

export const EmptyList = styled(BasicList)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
`;

export const CategoryList = styled(BasicList)`
  overflow-y: scroll;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const CategoryItem = styled.li`
  font-size: 1rem;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.highlight};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
`;
export const RoundDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
