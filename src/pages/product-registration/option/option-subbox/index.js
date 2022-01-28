import propTypes from 'prop-types';
import { getIdx } from 'pages/product-registration/option/utils';

function OptionSubBox({ setIdx, optIdx, optionSet, setOptionSet }) {
  const addSubOption = e => {
    const option = [...optionSet];
    const idx = getIdx(e.target.value);

    option[idx[0]].option[idx[1]].subOption = option[idx[0]].option[
      idx[1]
    ].subOption.concat({ title: '', regularPrice: '' });
    setOptionSet(option);
  };

  const removeSubOption = e => {
    const option = [...optionSet];
    const idx = getIdx(e.target.value);

    option[idx[0]].option[idx[1]].subOption.splice(idx[2], 1);
    setOptionSet(option);
  };

  const saveSubOptionTitle = (set, opt, sub, e) => {
    const option = [...optionSet];

    option[set].option[optIdx].subOption[sub].title = e.target.value;
    setOptionSet(option);
  };
  const saveSubRegularPrice = (set, opt, sub, e) => {
    const option = [...optionSet];

    option[set].option[opt].subOption[sub].regularPrice = e.target.value;
    setOptionSet(option);
  };

  return (
    <div>
      {optionSet[setIdx].option[optIdx].subOption.map((sub, subIdx) => (
        <div key={(sub, subIdx)}>
          <input
            type="text"
            placeholder="추가 옵션명 (필수)"
            onChange={e => saveSubOptionTitle(setIdx, optIdx, subIdx, e)}
          />
          <input
            type="number"
            placeholder="추가 옵션 정상가 (필수)"
            onChange={e => saveSubRegularPrice(setIdx, optIdx, subIdx, e)}
          />
          원
          <button
            type="button"
            value={`${setIdx}/${optIdx}/${subIdx}`}
            onClick={removeSubOption}>
            삭제
          </button>
        </div>
      ))}
      <button
        type="button"
        value={`${setIdx}/${optIdx}`}
        onClick={addSubOption}>
        +
      </button>
      추가 옵션 상품 추가
    </div>
  );
}

OptionSubBox.propTypes = {
  setIdx: propTypes.number.isRequired,
  optIdx: propTypes.number.isRequired,
  optionSet: propTypes.arrayOf(propTypes.object).isRequired,
  setOptionSet: propTypes.func.isRequired,
};

export default OptionSubBox;
