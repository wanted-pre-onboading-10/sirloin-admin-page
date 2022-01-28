import styled from 'styled-components';

export const TagSearchBox = styled.div`
  width: 100%;
  position: relative;
`;

export const TagSearchInput = styled.input`
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
`;

export const TagSearchButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.3rem;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
`;
