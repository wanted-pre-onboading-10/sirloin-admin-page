import styled from 'styled-components';
import React from 'react';

export const StyledCommonInput = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.theme.colors.grey3};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
`;

export const CommonInput = React.forwardRef((props, ref) => {
  <StyledCommonInput ref={ref} />;
});

export const CommonBtn = styled.button`
  background-color: white;
  color: ${props => props.theme.colors.black};
  height: 100%;
  border: 1px solid ${props => props.theme.colors.highlight};
  border-radius: 4px;
  font-weight: 500;
  font-size: 13px;
  padding-left: 12px;
  padding-right: 12px;
  line-height: 40px;
`;

export const CommonSaveBtn = styled(CommonBtn)`
  background-color: ${props => props.theme.colors.highlight};
  color: white;
  line-height: 32px;
  border: 1px solid ${props => props.theme.colors.highlight};
`;

export const CommonDltRedBtn = styled(CommonBtn)`
  background-color: white;
  color: red;
  border: 1px solid red;
`;

export const CommonTransBtn = styled(CommonBtn)`
  background-color: transparent;
  color: ${props => props.theme.colors.grey_3}
  border: 1px solid #c4c4c4;
`;

export const CommonDltSquareBtn = styled(CommonDltRedBtn)`
  border-radius: 0px;
  border: 1px solid #c4c4c4;
`;

export const CommonSquareBtn = styled(CommonBtn)`
  border-radius: 0px;
`;
