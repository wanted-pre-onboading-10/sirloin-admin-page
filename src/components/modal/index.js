import PropTypes from 'prop-types';
import { StyledCommonSaveBtn } from 'components/common-button/CommonBtns';
import * as S from 'components/modal/style';

function Modal({ onClose, message }) {
  return (
    <S.Background>
      <S.Contents>
        <S.Message>{message}</S.Message>
        <S.ButtonBox>
          <StyledCommonSaveBtn onClick={onClose}>닫기</StyledCommonSaveBtn>
        </S.ButtonBox>
      </S.Contents>
    </S.Background>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Modal;
