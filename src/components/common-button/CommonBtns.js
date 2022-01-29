import styled from 'styled-components';

export const StyledCommonBtn = styled.button`
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

export const StyledCommonSaveBtn = styled(StyledCommonBtn)`
  background-color: ${props => props.theme.colors.highlight};
  color: white;
  line-height: 32px;
  border: 1px solid ${props => props.theme.colors.highlight};
`;

export const StyledCommonDltRedBtn = styled(StyledCommonBtn)`
  color: red;
  border: 1px solid red;
`;

export const StyledCommonTransBtn = styled(StyledCommonBtn)`
  color: ${props => props.theme.colors.grey_3}
  border: 1px solid #c4c4c4;
`;

export const StyledCommonDltSquareBtn = styled(StyledCommonDltRedBtn)`
  border-radius: 0px;
  border: 1px solid #c4c4c4;
`;

export const StyledCommonSquareBtn = styled(StyledCommonBtn)`
  border-radius: 0px;
`;
