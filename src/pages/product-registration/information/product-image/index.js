import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/information/styles';
import * as Shared from 'styles/shared';

import ImageInput from 'components/image-input';

function ProductImageSubSection({ title, btnText }) {
  return (
    <Shared.SubSection>
      <Shared.SubSectionTitle>{title}</Shared.SubSectionTitle>
      <Shared.SubSectionContents>
        <ImageInput>
          <S.RoundedSquareButton>{btnText}</S.RoundedSquareButton>
        </ImageInput>
      </Shared.SubSectionContents>
    </Shared.SubSection>
  );
}

ProductImageSubSection.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default ProductImageSubSection;
