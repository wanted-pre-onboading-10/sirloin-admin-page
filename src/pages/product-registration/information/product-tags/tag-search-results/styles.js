import styled from 'styled-components';

export const NoSearchResults = styled.ul`
  display: ${props => (props.showSearchResults ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  margin-top: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  min-height: 10rem;
`;

export const TagSearchResults = styled.ul`
  display: ${props => (props.showSearchResults ? 'flex' : 'none')};
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export const TagItem = styled.li`
  background-color: #e8ffcc;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #d8ffcc;
  }
`;
