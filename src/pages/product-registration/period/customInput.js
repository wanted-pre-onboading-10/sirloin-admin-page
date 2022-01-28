// input 공통컴포넌트 완성시 삭제
import { forwardRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { ReactComponent as ChevronDown } from 'assets/images/chevron-down.svg';

const CustomInput = forwardRef(({ onClick, value, isCalendarOpen }, ref) => (
  <Input ref={ref} onClick={onClick} type="button">
    <Content>
      {value}
      <IconContainer isCalendarOpen={isCalendarOpen}>
        <ChevronDown />
      </IconContainer>
    </Content>
  </Input>
));

CustomInput.propTypes = {
  onClick: propTypes.func,
  value: propTypes.string,
  isCalendarOpen: propTypes.bool.isRequired,
};

CustomInput.defaultProps = {
  onClick: null,
  value: null,
};

const Input = styled.button`
  width: 230px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.gray_3};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  /* position: relative; */
  margin-left: 15px;
  transition: ease 500ms;
  transform: ${({ isCalendarOpen }) =>
    isCalendarOpen ? 'translateY(-5px) rotate(0.5turn) ' : ''};
`;

export default CustomInput;
