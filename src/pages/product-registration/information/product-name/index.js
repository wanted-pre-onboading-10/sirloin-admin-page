import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import * as S from 'pages/product-registration/information/styles';

import NameInput from 'pages/product-registration/information/product-name/name-input';
import ProductCode from 'pages/product-registration/information/product-name/product-code';

function ProductNameSubSection() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    let id = null;

    if (name === '') setCode('');
    else {
      id = setTimeout(() => {
        setCode(nanoid().slice(0, 10));
      }, 700);
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [name]);

  return (
    <S.SubSection>
      <S.SubSectionTitle>상품명</S.SubSectionTitle>
      <S.CodeSectionContainer>
        <S.SubSectionContents>
          <NameInput
            name={name}
            setName={setName}
            placeholder="상품명을 입력해주세요"
          />
        </S.SubSectionContents>
        <ProductCode code={code} />
      </S.CodeSectionContainer>
    </S.SubSection>
  );
}

export default ProductNameSubSection;
