import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 875px;
  margin-bottom: 50px;
  border: 1px solid #eee;
`;

export const Title = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  font-size: 17px;
  font-weight: 500;
  line-height: 13px;
`;

export const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

export const RowTitle = styled.div`
  flex: 1;
  padding: 25px 20px;
  background-color: ${({ theme }) => theme.colors.gray_4};
  border: 1px solid #eee;
  font-size: 17px;
`;

export const RowContent = styled.div`
  flex: 5.41;
  padding: 25px 30px;
`;

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
  /* margin: 15px; */
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
