import propTypes from 'prop-types';
import * as S from 'pages/product-registration/option/styles';

import OptionImg from 'pages/product-registration/option/option-img';
import OptionBox from 'pages/product-registration/option/option-box';
import OptionSubBox from 'pages/product-registration/option/option-subbox';

function OptionSetBox({ optionSet, setOptionSet }) {
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
            <OptionImg
              idx={setIdx}
              optionSet={optionSet}
              setOptionSet={setOptionSet}
            />

            {set.option.map((opt, optIdx) => (
              <S.OptionBox key={(opt, optIdx)}>
                <OptionBox
                  setIdx={setIdx}
                  optIdx={optIdx}
                  optionSet={optionSet}
                  setOptionSet={setOptionSet}
                />

                <OptionSubBox
                  setIdx={setIdx}
                  optIdx={optIdx}
                  optionSet={optionSet}
                  setOptionSet={setOptionSet}
                />
              </S.OptionBox>
            ))}

            <S.CommonSquareBtn
              type="button"
              value={setIdx}
              onClick={addOption}
              width="calc(100% - 20px)"
              marginTB={10}>
              + 옵션 추가
            </S.CommonSquareBtn>
          </S.Tab>
        </div>
      ))}
    </>
  );
}

OptionSetBox.propTypes = {
  optionSet: propTypes.arrayOf(propTypes.object).isRequired,
  setOptionSet: propTypes.func.isRequired,
};

export default OptionSetBox;
