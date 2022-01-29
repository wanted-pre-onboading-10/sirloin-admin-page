import styled from 'styled-components';

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
`;

export const DateTitle = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
  margin-right: 15px;
`;

export const DateAndTitleContainer = styled(DatePickerContainer)`
  padding-top: 0;
  margin-right: 50px;
`;

export const Separator = styled.p`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;
