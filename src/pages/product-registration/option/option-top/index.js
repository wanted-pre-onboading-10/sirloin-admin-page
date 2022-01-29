import * as S from 'pages/product-registration/option/styles';
import { useContext } from 'react';
import { ProductInfoContextStore } from 'context/product-info-context';

function OptionTop() {
  const { optionSet, setOptionSet } = useContext(ProductInfoContextStore);
  const addOptionSet = () => {
    setOptionSet([
      ...optionSet,
      {
        image: '',
        option: [
          {
            title: '',
            regularPrice: '',
            salePrice: '',
            tax: '비과세',
            stock: '',
            subOption: [],
          },
        ],
      },
    ]);
  };

  return (
    <S.SectionTop>
      <S.SectionTitle>상품 옵션*</S.SectionTitle>
      <S.CommonSquareBtn type="button" onClick={addOptionSet}>
        + 옵션 세트 추가
      </S.CommonSquareBtn>
    </S.SectionTop>
  );
}

export default OptionTop;
