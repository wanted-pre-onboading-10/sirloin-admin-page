import { useState } from 'react';
import Radio from 'components/radio';
import DatePicker from 'pages/product-registration/period/datePicker';
import * as S from 'pages/product-registration/period/period.style';

function Period() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <S.Container>
      <S.Title>노출 및 판매 기간 설정</S.Title>
      <S.Row>
        <S.RowTitle>상품 노출 기한</S.RowTitle>
        <S.RowContent>
          <Radio radioName="exposure" id="noLimit" value="제한 없음" checked />
          <Radio radioName="exposure" id="noExposure" value="미노출" />
          <Radio radioName="exposure" id="settingTerm" value="노출 기간 설정" />
        </S.RowContent>
      </S.Row>
    </S.Container>
  );
}

export default Period;
