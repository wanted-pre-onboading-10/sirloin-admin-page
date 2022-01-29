import PropTypes from 'prop-types';

import * as Shared from 'styles/shared';

const TITLE = '상품 총 재고';

function ProductStockSubSection({ stock }) {
  return (
    <Shared.SubSection>
      <Shared.SubSectionTitle>{TITLE}</Shared.SubSectionTitle>
      <Shared.SubSectionContents>{stock}개</Shared.SubSectionContents>
    </Shared.SubSection>
  );
}

ProductStockSubSection.propTypes = {
  stock: PropTypes.string.isRequired,
};

export default ProductStockSubSection;
