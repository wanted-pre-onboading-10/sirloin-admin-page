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

const OptionSet = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
`;

const OptionImage = styled.div`
  background-image: ${props => props.url};
`;
export { Section, SectionTitle, OptionSet, OptionImage };
