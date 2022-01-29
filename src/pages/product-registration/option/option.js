import { useState } from 'react';
import * as S from 'pages/product-registration/option/styles';

import OptionTop from 'pages/product-registration/option/option-top';
import OptionSetBox from 'pages/product-registration/option/option-setbox';

function Option() {
  const [optionSet, setOptionSet] = useState([]);

  const tableCheck = () => {
    const msg = [];

    if (optionSet.length === 0) msg.push('옵션을 추가하세요');
    else {
      for (let setIdx = 0; setIdx < optionSet.length; setIdx += 1) {
        for (
          let optIdx = 0;
          optIdx < optionSet[setIdx].option.length;
          optIdx += 1
        ) {
          if (optionSet[setIdx].option[optIdx].title === '')
            msg.push('옵션 타이틀을 작성하세요');
          if (optionSet[setIdx].option[optIdx].regularPrice === '')
            msg.push('옵션 정상가를 작성하세요');
          if (optionSet[setIdx].option[optIdx].salePrice === '')
            msg.push('옵션 판매가를 작성하세요');
          if (optionSet[setIdx].option[optIdx].stock === '')
            msg.push('옵션 재고를 작성하세요');

          for (
            let subIdx = 0;
            subIdx < optionSet[setIdx].option[optIdx].subOption.length;
            subIdx += 1
          ) {
            if (optionSet[setIdx].option[optIdx].subOption[subIdx].title === '')
              msg.push('추가 옵션 타이틀을 작성하세요');
            if (
              optionSet[setIdx].option[optIdx].subOption[subIdx]
                .regularPrice === ''
            )
              msg.push('추가 옵션 정상가를 작성하세요');
          }
        }
      }
    }

    console.log(optionSet);
    alert([...new Set(msg)]);
  };

  return (
    <S.Section>
      <OptionTop optionSet={optionSet} setOptionSet={setOptionSet} />

      {optionSet.length === 0 ? (
        <S.InitOption>옵션세트를 추가하여 옵션을 구성해 주세요.</S.InitOption>
      ) : (
        <OptionSetBox optionSet={optionSet} setOptionSet={setOptionSet} />
      )}
    </S.Section>
  );
}
export default Option;
