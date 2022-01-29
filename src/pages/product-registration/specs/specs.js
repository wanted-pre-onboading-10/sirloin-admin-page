import { useState } from 'react';
import * as S from 'pages/product-registration/specs/styles';
import SpecsBox from 'pages/product-registration/specs/specs-box';
import {
  INIT_INFO,
  SECTION_TITLE,
} from 'pages/product-registration/specs/constants';

function Specs() {
  const [productInfo, setProductInfo] = useState(INIT_INFO);

  const tableCheck = () => {
    console.log(productInfo);
  };

  return (
    <S.Section>
      <S.SectionTop>
        <S.SectionTitle>{SECTION_TITLE}</S.SectionTitle>
      </S.SectionTop>

      <SpecsBox productInfo={productInfo} setProductInfo={setProductInfo} />

      <button type="button" onClick={tableCheck}>
        체크
      </button>
    </S.Section>
  );
}

export default Specs;
