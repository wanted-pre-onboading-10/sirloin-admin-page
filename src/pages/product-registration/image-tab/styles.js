import styled from 'styled-components';

export const Section = styled.section`
  width: 875px;
  border: 1px solid #ccc;
  font-family: Arial;
`;

export const SectionTitle = styled.h2`
  padding: 1rem;
  font-weight: 500;
  color: #000;
  font-size: 1.1rem;
  border-bottom: 1px solid #ddd;
`;

export const SectionContents = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 5%;
`;

export const SquareButton = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 0.9rem 2.25rem;
  border: 1px solid ${props => props.theme.highlight};
  font-size: 0.9rem;
  line-height: 1rem;
`;
