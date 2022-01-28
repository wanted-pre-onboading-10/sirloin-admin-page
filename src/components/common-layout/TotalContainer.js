import styled from 'styled-components';
import { StyledCommonSaveBtn } from 'components/common-button/CommonBtns';

function TotalContainer() {
  return (
    <>
      <BtnContainer>
        <StyledCommonSaveBtn>저장하기</StyledCommonSaveBtn>
      </BtnContainer>
      <StyledTotalContainer />
    </>
  );
}

const StyledTotalContainer = styled.div`
  width: 100%;
  height: 100px;
`;

const BtnContainer = styled.div`
  width: 100%;
  position: relative;
  left: 200px;
`;
export default TotalContainer;
