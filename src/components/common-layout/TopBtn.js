import styled from 'styled-components';
import { StyledCommonSaveBtn } from 'components/common-button/CommonBtns';

function TopBtn() {
  return (
    <StyledTopBtnContainer>
      <h2>상품 등록</h2>
      <StyledCommonSaveBtn>저장하기</StyledCommonSaveBtn>
    </StyledTopBtnContainer>
  );
}

export const StyledTopBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0.38rem 2rem;
  max-height: 48.78px;
  font-family: 'Arial';

  h2 {
    font-weight: 700;
  }
`;

export default TopBtn;
