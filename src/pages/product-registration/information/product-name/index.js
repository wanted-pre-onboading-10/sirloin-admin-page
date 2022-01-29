import { useState, useEffect, useContext } from 'react';
import { nanoid } from 'nanoid';
import { ProductInfoContextStore } from 'context/product-info-context';

import * as S from 'pages/product-registration/information/styles';
import * as Shared from 'styles/shared';

import NameInput from 'pages/product-registration/information/product-name/name-input';
import ProductCode from 'pages/product-registration/information/product-name/product-code';

const SECTION_TITLE = '상품명 *';
const PRODUCT_NAME_INPUT_PLACEHOLDER = '상품명을 입력해주세요';

function ProductNameSubSection() {
  const [code, setCode] = useState('');
  const { productName, setProductName } = useContext(ProductInfoContextStore);

  useEffect(() => {
    let id = null;

    if (productName === '') setCode('');
    else {
      id = setTimeout(() => {
        setCode(nanoid().slice(0, 10));
      }, 700);
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [productName]);

  return (
    <Shared.SubSection>
      <Shared.SubSectionTitle>{SECTION_TITLE}</Shared.SubSectionTitle>
      <S.CodeSectionContainer>
        <Shared.SubSectionContents>
          <NameInput
            name={productName}
            setName={setProductName}
            placeholder={PRODUCT_NAME_INPUT_PLACEHOLDER}
          />
        </Shared.SubSectionContents>
        <ProductCode code={code} />
      </S.CodeSectionContainer>
    </Shared.SubSection>
  );
}

export default ProductNameSubSection;
