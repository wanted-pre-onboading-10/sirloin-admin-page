import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const StyledInput = styled.input`
  width: 50px;
  height: 20px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.gray_1};
  appearance: none;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.gray_4};
    box-shadow: -2px 7px 5px ${({ theme }) => theme.colors.gray_3};
    transition: ease 400ms;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary_3};

    &::before {
      background-color: ${({ theme }) => theme.colors.primary_2};
      box-shadow: 2px 7px 5px ${({ theme }) => theme.colors.gray_3};
      transform: translateX(23px);
      transition: ease 400ms;
    }
  }
`;
