import styled from 'styled-components';
import propTypes from 'prop-types';

function CommonBtn({ title }) {
  return <StyledCommonBtn>{title}</StyledCommonBtn>;
}

CommonBtn.propTypes = {
  title: propTypes.number.isRequired,
};

function CommonSaveBtn({ title }) {
  return <StyledCommonSaveBtn>{title}</StyledCommonSaveBtn>;
}

CommonSaveBtn.propTypes = {
  title: propTypes.string.isRequired,
};

function CommonDltRedBtn({ title }) {
  return <StyledCommonDltRedBtn>{title}</StyledCommonDltRedBtn>;
}

CommonDltRedBtn.propTypes = {
  title: propTypes.string.isRequired,
};

function CommonTransBtn({ title }) {
  return <StyledCommonTransBtn>{title}</StyledCommonTransBtn>;
}

CommonTransBtn.propTypes = {
  title: propTypes.string.isRequired,
};

function CommonDltSquareBtn({ title }) {
  return <StyledCommonDltSquareBtn>{title}</StyledCommonDltSquareBtn>;
}

CommonDltSquareBtn.propTypes = {
  title: propTypes.string.isRequired,
};

function CommonSquareBtn({ title }) {
  return <StyledCommonSquareBtn>{title}</StyledCommonSquareBtn>;
}

CommonSquareBtn.propTypes = {
  title: propTypes.string.isRequired,
};

const StyledCommonBtn = styled.button`
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

const StyledCommonSaveBtn = styled(StyledCommonBtn)`
  background-color: ${props => props.theme.colors.highlight};
  color: white;
  line-height: 32px;
  border: 1px solid ${props => props.theme.colors.highlight};
`;

const StyledCommonDltRedBtn = styled(StyledCommonBtn)`
  background-color: white;
  color: red;
  border: 1px solid red;
`;

const StyledCommonTransBtn = styled(StyledCommonBtn)`
  background-color: transparent;
  color: ${props => props.theme.colors.grey_3}
  border: 1px solid #c4c4c4;
`;

const StyledCommonDltSquareBtn = styled(StyledCommonDltRedBtn)`
  border-radius: 0px;
  border: 1px solid #c4c4c4;
`;

const StyledCommonSquareBtn = styled(StyledCommonBtn)`
  border-radius: 0px;
`;

export {
  CommonBtn,
  CommonSaveBtn,
  CommonDltRedBtn,
  CommonTransBtn,
  CommonDltSquareBtn,
  CommonSquareBtn,
};
