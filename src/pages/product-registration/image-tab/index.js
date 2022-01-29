import PropTypes from 'prop-types';
import * as S from 'pages/product-registration/image-tab/styles';
import ImageInput from 'components/image-input';

function ImageTab({ tabTitle }) {
  return (
    <S.Section>
      <S.SectionTitle>{tabTitle}</S.SectionTitle>
      <S.SectionContents>
        <ImageInput>
          <S.SquareButton type="button">+ 이미지 추가</S.SquareButton>
        </ImageInput>
      </S.SectionContents>
    </S.Section>
  );
}

ImageTab.propTypes = {
  tabTitle: PropTypes.string.isRequired,
};

export default ImageTab;
