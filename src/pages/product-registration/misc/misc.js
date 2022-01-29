import { useState } from 'react';
import SlideToggle from 'components/slide-toggle/slideToggle';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateTimePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';
import * as S from 'pages/product-registration/misc/misc.style';

function Misc() {
  const [orderStartDate, setOrderStartDate] = useState(null);
  const [orderEndDate, setOrderEndDate] = useState(null);

  return (
    <>
      <S.Container>
        <S.Title>상품 배송 설정</S.Title>
        <S.Row>
          <S.RowTitle>사용자 배송일 출발일 지정</S.RowTitle>
          <S.RowContent>
            <SlideToggle />
          </S.RowContent>
        </S.Row>
        <S.Row>
          <S.RowTitle>방문 수령</S.RowTitle>
          <S.RowContent>
            <SlideToggle />
          </S.RowContent>
        </S.Row>
        <S.Row>
          <S.RowTitle>선 주문 예약 배송</S.RowTitle>
          <S.RowContent>
            <SlideToggle />
            <S.DatePickerContainer>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={params => <TextField {...params} />}
                  value={orderStartDate}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____년 __월 __일"
                  onChange={newValue => {
                    setOrderStartDate(newValue);
                  }}
                  components={{
                    OpenPickerIcon: ChevronDown,
                  }}
                  // disabled={!isExposureLimited}
                />
                <S.Separator>~</S.Separator>
                <DateTimePicker
                  value={orderEndDate}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____년 __월 __일 hh:mm"
                  onChange={newValue => {
                    setOrderEndDate(newValue);
                  }}
                  minDate={orderStartDate}
                  components={{
                    OpenPickerIcon: ChevronDown,
                  }}
                  renderInput={params => <TextField {...params} />}
                  // disabled={!isExposureLimited}
                />
              </LocalizationProvider>
            </S.DatePickerContainer>
          </S.RowContent>
        </S.Row>
      </S.Container>
      <S.Container>
        <S.Title>상품 혜택 허용 설정</S.Title>
        <S.Row>
          <S.RowTitle>마일리지 적립</S.RowTitle>
          <S.RowContent>
            <SlideToggle />
          </S.RowContent>
        </S.Row>
      </S.Container>
      <S.Container>
        <S.Title>상품 혜택 허용 설정</S.Title>
        <S.Row>
          <S.RowTitle>마일리지 적립</S.RowTitle>
          <S.RowContent>
            <SlideToggle />
          </S.RowContent>
        </S.Row>
      </S.Container>
    </>
  );
}

export default Misc;
