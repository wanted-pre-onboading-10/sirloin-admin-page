import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 875px;
  border: 1px solid #eee;
`;

export const Title = styled.div`
  /* height: 50px; */
  padding: 20px;
  border-bottom: 1px solid #eee;
  font-size: 17px;
  font-weight: 500;
  line-height: 13px;
`;

export const Row = styled.div`
  display: flex;
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
