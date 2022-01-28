import styled from 'styled-components';

const Section = styled.section`
  width: 875px;
  border: 1px solid #ccc;
  font-family: Arial;
`;

const SectionTitle = styled.h2`
  padding: 1rem;
  font-weight: 900;
  color: #000;
  font-size: 1.1rem;
  border-bottom: 1px solid #ddd;
`;

const SectionContents = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 5%;
`;

const ImageList = styled.ul`
  padding-top: 0.25rem;

  & > * + * {
    margin-top: 1rem;
  }
`;

const ImageItem = styled.li`
  font-size: 0.9rem;

  & > * + * {
    margin-left: 0.3rem;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const Button = styled.button`
  background: transparent;
  cursor: pointer;
`;

const SquareButton = styled(Button)`
  padding: 0.9rem 2.25rem;
  border: 1px solid ${props => props.theme.highlight};
  font-size: 0.9rem;
  line-height: 1rem;
`;

const RoundButton = styled.button`
  border-radius: 50%;
  font-size: 0.8rem;
  border: 1px solid #ddd;
  height: 1.25rem;
  width: 1.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export {
  Section,
  SectionTitle,
  SectionContents,
  ImageList,
  ImageItem,
  HiddenInput,
  SquareButton,
  RoundButton,
};
