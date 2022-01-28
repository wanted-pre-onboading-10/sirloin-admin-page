import styled from 'styled-components';

export const CommonTableTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 12rem;
  text-align: start;
  background-color: #fff;
  padding: 1.2rem 1.6rem;
  border: 1px solid #e9eaef;
  margin: 0 8px;
`;

export const CommonTableCell = styled.td`
  display: flex;
  border-top: 1px solid #e9eaef;
  border-left: 1px solid #e9eaef;
  &:last-child {
    border-right: 1px solid #e9eaef;
  }
  margin: 0 8px;
`;

export const CommonTableCellTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 12rem;
  text-align: start;
  background-color: #f5f5f7;
  padding: 1.2rem 1.6rem;
  width: 12rem;
`;

export const CommonTableCellValue = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 1.2rem 1.6rem;
`;
