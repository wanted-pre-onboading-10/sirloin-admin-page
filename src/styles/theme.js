import { css } from 'styled-components';

const wrapSize = '1080px';

const wrapper = css`
  margin: 0 auto;
  width: ${wrapSize};
`;

const colors = {
  highlight: '#2517b5',
  primary_1: '#28205C',
  primary_2: '#2000AE',
  primary_3: '#9E96E2',
  primary_4: '#EBEBF2',
  black: '#000000',
  white: 'FFFFFf',
  green: '#E7F7D5',
  gray_1: '#9E9E9E',
  gray_2: '#ABA9AB',
  gray_3: '#E7E7E7',
  gray_4: '#FAFAFA',
};

const theme = {
  colors,
  wrapSize,
  wrapper,
};

export default theme;
