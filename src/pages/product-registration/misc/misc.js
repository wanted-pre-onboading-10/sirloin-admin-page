import { useState } from 'react';
import SlideToggle from 'components/slide-toggle/slideToggle';
import * as S from 'pages/product-registration/misc/misc.style';

function Misc() {
  const [isMileageSave, setIsMileageSave] = useState(true);
  const [isGratitudeServe, setIsGratitudeServe] = useState(false);

  return (
    <>
      <S.Container>
        <S.Title>상품 혜택 허용 설정</S.Title>
        <S.Row>
          <S.RowTitle>마일리지 적립</S.RowTitle>
          <S.RowContent>
            <SlideToggle
              checked
              onChange={e => setIsMileageSave(e.target.checked)}
            />
          </S.RowContent>
        </S.Row>
      </S.Container>
      <S.Container>
        <S.Title>기타 설정</S.Title>
        <S.Row>
          <S.RowTitle>감사카드 제공</S.RowTitle>
          <S.RowContent>
            <SlideToggle
              onChange={e => setIsGratitudeServe(e.target.checked)}
            />
          </S.RowContent>
        </S.Row>
      </S.Container>
    </>
  );
}

export default Misc;
