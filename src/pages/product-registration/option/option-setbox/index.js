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
        <S.OptionSet key={(set, setIdx)}>
          <button type="button" value={setIdx} onClick={removeOptionSet}>
            삭제
          </button>

          <OptionImg
            idx={setIdx}
            optionSet={optionSet}
            setOptionSet={setOptionSet}
          />

          {set.option.map((opt, optIdx) => (
            <div key={(opt, optIdx)}>
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
            </div>
          ))}

          <button type="button" value={setIdx} onClick={addOption}>
            + 옵션 추가
          </button>
        </S.OptionSet>
      ))}
    </>
  );
}

OptionSetBox.propTypes = {
  optionSet: propTypes.arrayOf(propTypes.object).isRequired,
  setOptionSet: propTypes.func.isRequired,
};

export default OptionSetBox;
