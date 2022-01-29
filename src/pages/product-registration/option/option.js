import { useEffect, useContext } from 'react';
import { ProductInfoContextStore } from 'context/product-info-context';
import * as S from 'pages/product-registration/option/styles';

import OptionTop from 'pages/product-registration/option/option-top';
import OptionSetBox from 'pages/product-registration/option/option-setbox';

function Option() {
  const { optionSet, setStock } = useContext(ProductInfoContextStore);

  const calcStock = () => {
    let count = 0;

    for (let i = 0; i < optionSet.length; i += 1) {
      for (let j = 0; j < optionSet[i].option.length; j += 1) {
        count += Number(optionSet[i].option[j].stock);
      }
    }

    setStock(count);
  };

  useEffect(() => {
    calcStock();
  }, [optionSet]);

  return (
    <S.Section>
      <OptionTop />

      {optionSet.length === 0 ? (
        <S.InitOption>옵션세트를 추가하여 옵션을 구성해 주세요.</S.InitOption>
      ) : (
        <OptionSetBox />
      )}
    </S.Section>
  );
}
export default Option;
