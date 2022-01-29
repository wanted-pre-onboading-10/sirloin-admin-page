import { useState } from 'react';
import Radio from 'components/radio';
import * as S from 'pages/product-registration/period/period.style';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateTimePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';

function Period() {
  const [isExposure, setIsExposure] = useState(true);
  const [isExposureLimited, setIsExposureLimited] = useState(false);
  const [isSell, setIsSell] = useState(true);
  const [isSellLimited, setIsSellLimited] = useState(false);
  const [exposureStartDate, setExposureStartDate] = useState(null);
  const [exposureEndDate, setExposureEndDate] = useState(null);
  const [sellStartDate, setSellStartDate] = useState(null);
  const [sellEndDate, setSellEndDate] = useState(null);

  const changeExposure = () => {
    setIsExposure(prev => !prev);
    setIsExposureLimited(false);
  };
  const changeExposureTerm = () => {
    setIsExposure(true);
    setIsExposureLimited(true);
  };
  const changeSell = () => {
    setIsSell(prev => !prev);
    setIsSellLimited(false);
  };
  const changeSellTerm = () => {
    setIsSell(true);
    setIsSellLimited(true);
  };

  return (
    <S.Container>
      <S.Title>노출 및 판매 기간 설정</S.Title>
      <S.Row>
        <S.RowTitle>상품 노출 기한</S.RowTitle>
        <S.RowContent>
          <Radio
            radioName="exposure"
            id="noLimitExposure"
            label="제한 없음"
            checked
            onChange={changeExposure}
          />
          <Radio
            radioName="exposure"
            id="noExposureExposure"
            label="미노출"
            onChange={changeExposure}
          />
          <Radio
            radioName="exposure"
            id="settingTermExposure"
            label="노출 기간 설정"
            onChange={changeExposureTerm}
          />
          <S.DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={params => <TextField {...params} />}
                value={exposureStartDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일"
                onChange={newValue => {
                  setExposureStartDate(newValue);
                }}
                components={{
                  OpenPickerIcon: ChevronDown,
                }}
                disabled={!isExposureLimited}
              />
              <S.Separator>~</S.Separator>
              <DateTimePicker
                value={exposureEndDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일 hh:mm"
                onChange={newValue => {
                  setExposureEndDate(newValue);
                }}
                minDate={exposureStartDate}
                components={{
                  OpenPickerIcon: ChevronDown,
                }}
                renderInput={params => <TextField {...params} />}
                disabled={!isExposureLimited}
              />
            </LocalizationProvider>
          </S.DatePickerContainer>
        </S.RowContent>
      </S.Row>
      <S.Row>
        <S.RowTitle>상품 판매 기한</S.RowTitle>
        <S.RowContent>
          <Radio
            radioName="sell"
            id="noLimitSell"
            label="제한 없음"
            checked
            onChange={changeSell}
          />
          <Radio
            radioName="sell"
            id="noExposureSell"
            label="미노출"
            onChange={changeSell}
          />
          <Radio
            radioName="sell"
            id="settingTermSell"
            label="노출 기간 설정"
            onChange={changeSellTerm}
          />
          <S.DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={params => <TextField {...params} />}
                value={sellStartDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일"
                onChange={newValue => {
                  setSellStartDate(newValue);
                }}
                components={{
                  OpenPickerIcon: ChevronDown,
                }}
                disabled={!isSellLimited}
              />
              <S.Separator>~</S.Separator>
              <DateTimePicker
                value={sellEndDate}
                inputFormat="yyyy.MM.dd hh:mm"
                mask="____년 __월 __일 hh:mm"
                onChange={newValue => {
                  setSellEndDate(newValue);
                }}
                minDate={sellStartDate}
                components={{
                  OpenPickerIcon: ChevronDown,
                }}
                renderInput={params => <TextField {...params} />}
                disabled={!isSellLimited}
              />
            </LocalizationProvider>
          </S.DatePickerContainer>
        </S.RowContent>
      </S.Row>
    </S.Container>
  );
}

export default Period;

const NO_LIMIT = '제한 없음';
const NO_PRESENT = '미노출';
const SET_TERM = '노출 기간 설정';
