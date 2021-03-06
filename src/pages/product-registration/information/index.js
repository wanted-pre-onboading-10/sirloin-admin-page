import PropTypes from 'prop-types';

import * as Shared from 'styles/shared';

import CategorySubSection from 'pages/product-registration/information/product-category';
import ProductNameSubSection from 'pages/product-registration/information/product-name';
import ProductIntroSubSection from 'pages/product-registration/information/product-intro';
import ProductImageSubSection from 'pages/product-registration/information/product-image';
import ProductStockSubSection from 'pages/product-registration/information/product-stock';
import ProductTagSubSection from 'pages/product-registration/information/product-tags';
import { useContext } from 'react';
import { ProductInfoContextStore } from 'context/product-info-context';

const ImageSectionsData = [
  { title: '상품 썸네일', btnText: '+ 이미지 첨부' },
  { title: '상품 대표 이미지', btnText: '+ 이미지 첨부' },
];

function Information({ tabTitle }) {
  const { stock } = useContext(ProductInfoContextStore);

  return (
    <Shared.Section>
      <Shared.SectionTitle>{tabTitle}</Shared.SectionTitle>
      <CategorySubSection />
      <ProductTagSubSection />
      <ProductNameSubSection />
      <ProductIntroSubSection />
      {ImageSectionsData.map(({ title, btnText }) => (
        <ProductImageSubSection title={title} btnText={btnText} key={title} />
      ))}
      <ProductStockSubSection stock={stock.toString()} />
    </Shared.Section>
  );
}

Information.propTypes = {
  tabTitle: PropTypes.string.isRequired,
};

export default Information;
