import { useState } from 'react';
import Radio from 'components/radio';
import * as S from 'pages/product-registration/period/period.style';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateTimePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';

function Period() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <S.Container>
      <S.Title>노출 및 판매 기간 설정</S.Title>
      <S.Row>
        <S.RowTitle>상품 노출 기한</S.RowTitle>
        <S.RowContent>
          <Radio radioName="exposure" id="noLimit" value="제한 없음" checked />
          <Radio radioName="exposure" id="noExposure" value="미노출" />
          <Radio radioName="exposure" id="settingTerm" value="노출 기간 설정" />
          <S.DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={params => <TextField {...params} />}
                value={startDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일"
                onChange={newValue => {
                  setStartDate(newValue);
                }}
                components={{
                  OpenPickerIcon: ChevronDown,
                }}
              />
              <S.Separator>~</S.Separator>
              <DateTimePicker
                value={endDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일 hh:mm"
                onChange={newValue => {
                  setEndDate(newValue);
                }}
                minDate={startDate}
                components={{
                  OpenPickerIcon: ChevronDown,
                }}
                renderInput={params => <TextField {...params} />}
              />
            </LocalizationProvider>
          </S.DatePickerContainer>
        </S.RowContent>
      </S.Row>
    </S.Container>
  );
}

export default Period;
