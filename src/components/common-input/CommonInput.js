import styled from 'styled-components';
import React from 'react';

const CommonInput = React.forwardRef((props, ref) => (
  <StyledCommonInput ref={ref} type="text" />
));

const StyledCommonInput = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.grey_3};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
`;

export default CommonInput;
