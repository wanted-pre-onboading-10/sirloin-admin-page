import { useContext } from 'react';
import { ProductInfoContextStore } from 'context/product-info-context';

import styled from 'styled-components';
import { StyledCommonSaveBtn } from 'components/common-button/CommonBtns';

function TopBtn() {
  const { optionSet } = useContext(ProductInfoContextStore);

  const optionCheck = () => {
    const msg = [];

    if (optionSet.length === 0) msg.push('옵션을 추가하세요');
    else {
      for (let setIdx = 0; setIdx < optionSet.length; setIdx += 1) {
        for (
          let optIdx = 0;
          optIdx < optionSet[setIdx].option.length;
          optIdx += 1
        ) {
          if (optionSet[setIdx].option[optIdx].title === '')
            msg.push('옵션 타이틀을 작성하세요');
          if (optionSet[setIdx].option[optIdx].regularPrice === '')
            msg.push('옵션 정상가를 작성하세요');
          if (optionSet[setIdx].option[optIdx].salePrice === '')
            msg.push('옵션 판매가를 작성하세요');
          if (optionSet[setIdx].option[optIdx].stock === '')
            msg.push('옵션 재고를 작성하세요');

          for (
            let subIdx = 0;
            subIdx < optionSet[setIdx].option[optIdx].subOption.length;
            subIdx += 1
          ) {
            if (optionSet[setIdx].option[optIdx].subOption[subIdx].title === '')
              msg.push('추가 옵션 타이틀을 작성하세요');
            if (
              optionSet[setIdx].option[optIdx].subOption[subIdx]
                .regularPrice === ''
            )
              msg.push('추가 옵션 정상가를 작성하세요');
          }
        }
      }
    }

    return msg.length;
  };

  const inputCheck = () => {
    let check = true;

    if (optionCheck() !== 0) {
      check = false;
    }

    // 필드 값 채워져있는지 체크

    if (check === false) {
      alert('필수값을 모두 입력해 주세요.');
    } else {
      alert('저장되었습니다.');
    }
  };

  return (
    <StyledTopBtnContainer onClick={inputCheck}>
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
