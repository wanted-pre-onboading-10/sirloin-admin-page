import { useState } from 'react';
import * as S from 'pages/product-registration/specs/styles';
import SpecsBox from 'pages/product-registration/specs/specs-box';

const initInfo = [
  {
    info: [
      {
        title: '제품명 / 중량',
        placeholder: '제품명 / 중량을 입력해 주세요.',
        state: '',
      },
      {
        title: '원산지 / 원재료 함량',
        placeholder: '원산지 / 원재 함량을 입력해 주세요.',
        state: '',
      },
      {
        title: '등급',
        placeholder: '등급 (근내지방도 수치)를 입력해 주세요.',
        state: '',
      },
      {
        title: '보관',
        placeholder: '보관 방식을 입력해 주세요.',
        state: '',
      },
      {
        title: '식품 유형',
        placeholder: '식품 유형을 입력해 주세요. (ex) 포장육',
        state: '',
      },
    ],
    other: [
      {
        title: '',
        state: '',
      },
    ],
  },
];

function Specs() {
  const [productInfo, setProductInfo] = useState(initInfo);

  const tableCheck = () => {
    console.log(productInfo);
  };

  return (
    <S.Section>
      <S.SectionTitle>
        <span>상품 정보 고시</span>
      </S.SectionTitle>

      <SpecsBox productInfo={productInfo} setProductInfo={setProductInfo} />

      <button type="button" onClick={tableCheck}>
        체크
      </button>
    </S.Section>
  );
}

export default Specs;
