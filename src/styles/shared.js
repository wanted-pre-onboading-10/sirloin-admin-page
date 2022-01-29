import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  max-width: 975px;
  border: 1px solid #eee;
  font-family: Arial;
`;

export const SectionTitle = styled.h2`
  padding: 1rem;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const SubSection = styled.div`
  display: grid;
  grid-template-columns: 11rem 1fr;
  border-top: 1px solid #ddd;
`;

export const SubSectionTitle = styled.h3`
  padding: 1.2rem 1rem;
  background-color: #f7f7f7;
  font-size: 1rem;
  letter-spacing: 1px;
  border-right: 1px solid #ddd;
  word-break: keep-all;
`;

export const SubSectionContents = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 5%;
  width: 95% - 200px;
`;

export const ColumnSubSectionContents = styled(SubSectionContents)`
  flex-direction: column;
`;
