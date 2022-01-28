import styled from 'styled-components';

export const SelectedTagsBox = styled.div`
  margin-top: 2rem;
`;

export const SelectedTagsHeading = styled.h3`
  margin-bottom: 1rem;
`;

export const SelectedTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
`;

export const SelectedTagItem = styled.li`
  background-color: #e8ffcc;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #d8ffcc;
  }
`;

export const DeleteTagButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
