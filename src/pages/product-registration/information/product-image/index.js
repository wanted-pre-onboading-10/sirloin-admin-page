import PropTypes from 'prop-types';

import ImageInput from 'components/image-input';

import * as S from 'pages/product-registration/information/styles';

function ProductImageSubSection({ title, btnText }) {
  return (
    <S.SubSection>
      <S.SubSectionTitle>{title}</S.SubSectionTitle>
      <S.SubSectionContents>
        <ImageInput>
          <S.RoundedSquareButton>{btnText}</S.RoundedSquareButton>
        </ImageInput>
      </S.SubSectionContents>
    </S.SubSection>
  );
}

ProductImageSubSection.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default ProductImageSubSection;
