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
`;

export const SubSection = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
`;

export const SubSectionTitle = styled.h3`
  padding: 1.2rem 1rem;
  background-color: #f7f7f7;
  font-size: 0.9rem;
  letter-spacing: 1px;
  width: 175px;
  border-right: 1px solid #ddd;
`;

export const SubSectionContents = styled.div`
  padding: 1.2rem 1rem;
  display: flex;
  gap: 5%;
  width: 80%;
`;

export const Button = styled.button`
  background: transparent;
  cursor: pointer;
`;

export const RoundedSquareButton = styled(Button)`
  padding: 0.9rem 2.25rem;
  border: 1px solid ${props => props.theme.highlight};
  font-size: 0.9rem;
  line-height: 1rem;
  border-radius: 0.25rem;
`;

export const TagSectionContents = styled(SubSectionContents)`
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
