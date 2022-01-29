import styled from 'styled-components';
import { StyledCommonSaveBtn } from 'components/common-button/CommonBtns';

function TopBtn() {
  return (
    <StyledTopBtnContainer>
      <Title>상품 등록</Title>
      <StyledCommonSaveBtn>저장하기</StyledCommonSaveBtn>
    </StyledTopBtnContainer>
  );
}

export const StyledTopBtnContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  position: relative;
  left: 200px;
  border: 1px solid #b7b7bb;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 16px;
  margin-left: 30px;
`;

export default TopBtn;
