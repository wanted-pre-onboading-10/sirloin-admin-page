import { css } from 'styled-components';

const wrapSize = '1080px';

const wrapper = css`
  margin: 0 auto;
  width: ${wrapSize};
`;

const colors = {
  primary_1: '#28205c',
  primary_2: '#2000ae',
  primary_3: '#9e96e2',
  primary_4: '#ebebf2',
  black: '#000000',
  white: '#fff',
  green: '#e7f7d5',
  gray_1: '#9e9e9e',
  gray_2: '##aba9ab',
  gray_3: '#e7e7e7',
  gray_4: '#fafafa',
};

const theme = {
  colors,
  wrapSize,
  wrapper,
};

export default theme;
