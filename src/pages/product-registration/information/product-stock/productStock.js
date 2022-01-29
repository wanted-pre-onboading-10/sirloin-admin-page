import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/information/styles';

const TITLE = '상품 총 재고';

function ProductStockSubSection({ stock }) {
  return (
    <S.SubSection>
      <S.SubSectionTitle>{TITLE}</S.SubSectionTitle>
      <S.SubSectionContents>{stock}개</S.SubSectionContents>
    </S.SubSection>
  );
}

ProductStockSubSection.propTypes = {
  stock: PropTypes.string.isRequired,
};

export default ProductStockSubSection;
