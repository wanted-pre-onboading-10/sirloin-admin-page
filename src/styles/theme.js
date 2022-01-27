import { css } from 'styled-components';

const wrapSize = '1080px';

const wrapper = css`
  margin: 0 auto;
  width: ${wrapSize};
`;

const colors = {
  highlight: '#2A18BD',
  black: '#000000',
  white: '#fff',
  gray_1: '#666',
  gray_2: '#ddd',
  gray_3: '#e1e2e3',
};

const theme = {
  colors,
  wrapSize,
  wrapper,
};

export default theme;
