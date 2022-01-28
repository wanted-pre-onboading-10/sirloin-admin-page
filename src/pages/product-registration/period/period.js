import { useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import Radio from 'components/radio';
import CustomInput from 'pages/product-registration/period/customInput';
import * as S from 'pages/product-registration/period/period.style';
import 'react-datepicker/dist/react-datepicker.css';

function Period() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [CalendarOpen, setCalendarOpen] = useState([false, false]);

  const changeCalendarState = index =>
    setCalendarOpen(prev => {
      const arr = [...prev];
      arr[index] = !arr[index];
      return arr;
    });

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
            <ReactDatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              locale={ko}
              dateFormat="yyyy.MM.dd  yy:MM"
              customInput={<CustomInput isCalendarOpen={CalendarOpen[0]} />}
              onCalendarOpen={() => changeCalendarState(0)}
              onCalendarClose={() => changeCalendarState(0)}
            />
            <S.Separator>~</S.Separator>
            <ReactDatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              minDate={startDate}
              locale={ko}
              dateFormat="yyyy.MM.dd  yy:MM"
              customInput={<CustomInput isCalendarOpen={CalendarOpen[1]} />}
              onCalendarOpen={() => changeCalendarState(1)}
              onCalendarClose={() => changeCalendarState(1)}
            />
          </S.DatePickerContainer>
        </S.RowContent>
      </S.Row>
    </S.Container>
  );
}

registerLocale('ko', ko);

export default Period;
