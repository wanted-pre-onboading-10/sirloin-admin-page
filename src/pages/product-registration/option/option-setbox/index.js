import { useContext } from 'react';
import { ProductInfoContextStore } from 'context/product-info-context';
import * as S from 'pages/product-registration/option/styles';

import OptionImg from 'pages/product-registration/option/option-img';
import OptionBox from 'pages/product-registration/option/option-box';
import OptionSubBox from 'pages/product-registration/option/option-subbox';

function OptionSetBox() {
  const { optionSet, setOptionSet } = useContext(ProductInfoContextStore);

  const removeOptionSet = e => {
    const option = [...optionSet];

    option.splice(e.target.value, 1);
    setOptionSet(option);
  };

  const addOption = e => {
    const option = [...optionSet];

    option[e.target.value].option = option[e.target.value].option.concat({
      title: '',
      regularPrice: '',
      salePrice: '',
      stock: '',
      subOption: [],
    });
    setOptionSet(option);
  };

  return (
    <>
      {optionSet.map((set, setIdx) => (
        <div key={(set, setIdx)}>
          <S.DeleteBtn type="button" value={setIdx} onClick={removeOptionSet}>
            삭제
          </S.DeleteBtn>
          <S.Tab>
            <OptionImg idx={setIdx} />

            {set.option.map((opt, optIdx) => (
              <S.OptionBox key={(opt, optIdx)}>
                <OptionBox setIdx={setIdx} optIdx={optIdx} />

                <OptionSubBox setIdx={setIdx} optIdx={optIdx} />
              </S.OptionBox>
            ))}

            <S.CommonSquareBtn
              type="button"
              value={setIdx}
              onClick={addOption}
              width="calc(100%)"
              marginTB={10}>
              + 옵션 추가
            </S.CommonSquareBtn>
          </S.Tab>
        </div>
      ))}
    </>
  );
}

export default OptionSetBox;
