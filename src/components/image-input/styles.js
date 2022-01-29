import styled from 'styled-components';

export const ImageList = styled.ul`
  padding-top: 0.25rem;

  & > * + * {
    margin-top: 1rem;
  }
`;

export const ImageItem = styled.li`
  font-size: 0.9rem;

  & > * + * {
    margin-left: 0.3rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const RoundButton = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  font-size: 0.8rem;
  border: 1px solid #ddd;
  height: 1.25rem;
  width: 1.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
