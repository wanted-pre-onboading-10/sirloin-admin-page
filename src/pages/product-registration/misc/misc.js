import { useState } from 'react';
import SlideToggle from 'components/slide-toggle/slideToggle';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DateTimePicker, DesktopDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';
import * as S from 'pages/product-registration/misc/misc.style';

function Misc() {
  const [isDeliveryClientCustom, setIsDeliveryClientCustom] = useState(false);
  const [isDeliveryClientPickUp, setIsDeliveryClientPickUp] = useState(false);
  const [isDeliveryReserve, setIsDeliveryReserve] = useState(false);

  const changeDeliverySetting = e => {
    switch (e.target.value) {
      case 'custom':
        setIsDeliveryClientCustom(e.target.checked);
        setIsDeliveryClientPickUp(!e.target.checked);
        setIsDeliveryReserve(!e.target.checked);
        break;
      case 'pickUp':
        setIsDeliveryClientCustom(!e.target.checked);
        setIsDeliveryClientPickUp(e.target.checked);
        setIsDeliveryReserve(!e.target.checked);
        break;
      case 'reserve':
        setIsDeliveryClientCustom(!e.target.checked);
        setIsDeliveryClientPickUp(!e.target.checked);
        setIsDeliveryReserve(e.target.checked);
        break;
      default:
    }
  };

  const [orderStartDate, setOrderStartDate] = useState(null);
  const [orderEndDate, setOrderEndDate] = useState(null);
  const [dawnDeliveryDate, setDawnDeliveryDate] = useState(null);
  const [normalDeliveryDate, setNormalDeliveryDate] = useState(null);

  const [isMileageSave, setIsMileageSave] = useState(true);
  const [isGratitudeServe, setIsGratitudeServe] = useState(false);

  return (
    <>
      <S.Container>
        <S.Title>상품 배송 설정</S.Title>
        <S.Row>
          <S.RowTitle>사용자 배송일 출발일 지정</S.RowTitle>
          <S.RowContent>
            <SlideToggle
              type="radio"
              name="delivery"
              id="custom"
              onChange={changeDeliverySetting}
            />
          </S.RowContent>
        </S.Row>
        <S.Row>
          <S.RowTitle>방문 수령</S.RowTitle>
          <S.RowContent>
            <SlideToggle
              type="radio"
              name="delivery"
              id="pickUp"
              onChange={changeDeliverySetting}
            />
          </S.RowContent>
        </S.Row>
        <S.Row>
          <S.RowTitle>선 주문 예약 배송</S.RowTitle>
          <S.RowContent>
            <SlideToggle
              type="radio"
              name="delivery"
              id="reserve"
              onChange={changeDeliverySetting}
            />
            <S.DatePickerContainer>
              <S.DateTitle>주문 시간</S.DateTitle>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={params => <TextField {...params} />}
                  value={orderStartDate}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__"
                  onChange={newValue => {
                    setOrderStartDate(newValue);
                  }}
                  components={{
                    OpenPickerIcon: ChevronDown,
                  }}
                  disabled={!isDeliveryReserve}
                />
                <S.Separator>~</S.Separator>
                <DateTimePicker
                  value={orderEndDate}
                  inputFormat="yyyy.MM.dd hh:mm"
                  mask="____.__.__"
                  onChange={newValue => {
                    setOrderEndDate(newValue);
                  }}
                  minDate={orderStartDate}
                  components={{
                    OpenPickerIcon: ChevronDown,
                  }}
                  renderInput={params => <TextField {...params} />}
                  disabled={!isDeliveryReserve}
                />
              </LocalizationProvider>
            </S.DatePickerContainer>
            <S.DatePickerContainer>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <S.DateAndTitleContainer>
                  <S.DateTitle>새벽 배송</S.DateTitle>
                  <DesktopDatePicker
                    renderInput={params => (
                      <TextField {...params} style={{ width: '150px' }} />
                    )}
                    value={dawnDeliveryDate}
                    inputFormat="yyyy.MM.dd"
                    mask="____.__.__"
                    onChange={newValue => {
                      setDawnDeliveryDate(newValue);
                    }}
                    components={{
                      OpenPickerIcon: ChevronDown,
                    }}
                    minDate={orderStartDate}
                    maxDate={orderEndDate}
                    disabled={!isDeliveryReserve}
                  />
                </S.DateAndTitleContainer>
                <S.DateAndTitleContainer>
                  <S.DateTitle>일반 배송</S.DateTitle>
                  <DesktopDatePicker
                    value={normalDeliveryDate}
                    inputFormat="yyyy.MM.dd"
                    mask="____.__.__"
                    onChange={newValue => {
                      setNormalDeliveryDate(newValue);
                    }}
                    minDate={orderStartDate}
                    components={{
                      OpenPickerIcon: ChevronDown,
                    }}
                    renderInput={params => (
                      <TextField {...params} style={{ width: '150px' }} />
                    )}
                    maxDate={orderEndDate}
                    disabled={!isDeliveryReserve}
                  />
                </S.DateAndTitleContainer>
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
