import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/image-tab/styles';
import * as Shared from 'styles/shared';

import ImageInput from 'components/image-input';

function ImageTab({ tabTitle }) {
  return (
    <Shared.Section>
      <Shared.SectionTitle>{tabTitle}</Shared.SectionTitle>
      <S.SectionContents>
        <ImageInput>
          <S.SquareButton type="button">+ 이미지 추가</S.SquareButton>
        </ImageInput>
      </S.SectionContents>
    </Shared.Section>
  );
}

ImageTab.propTypes = {
  tabTitle: PropTypes.string.isRequired,
};

export default ImageTab;
