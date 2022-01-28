import propTypes from 'prop-types';
import { getIdx } from 'pages/product-registration/option/utils';

function OptionBox({ setIdx, optIdx, optionSet, setOptionSet }) {
  const removeOption = e => {
    const option = [...optionSet];
    const idx = getIdx(e.target.value);

    if (option[idx[0]].option.length === 1) {
      option.splice(idx[0], 1);
    } else {
      option[idx[0]].option.splice(idx[1], 1);
    }
    setOptionSet(option);
  };

  const saveOptionTitle = (set, opt, e) => {
    const option = [...optionSet];

    option[set].option[opt].title = e.target.value;
    setOptionSet(option);
  };

  const saveRegularPrice = (set, opt, e) => {
    const option = [...optionSet];

    option[set].option[opt].regularPrice = e.target.value;
    setOptionSet(option);
  };

  const saveSalePrice = (set, opt, e) => {
    const option = [...optionSet];

    option[set].option[opt].salePrice = e.target.value;
    setOptionSet(option);
  };

  const saveStock = (set, opt, e) => {
    const option = [...optionSet];

    option[set].option[opt].stock = e.target.value;
    setOptionSet(option);
  };

  const saveVAT = (set, opt, e) => {
    const option = [...optionSet];
    option[set].option[opt].tax = e.target.value;
    setOptionSet(option);
  };

  const calcDiscount = (set, opt) => {
    const regular = optionSet[set].option[opt].regularPrice;
    const sale = optionSet[set].option[opt].salePrice;
    const rate = Math.floor(((regular - sale) / regular) * 100);

    if (Number.isNaN(rate)) return '할인율';
    return rate;
  };

  return (
    <div>
      <button
        type="button"
        onClick={removeOption}
        value={`${setIdx}/${optIdx}`}>
        삭제
      </button>
      <input
        type="text"
        placeholder="옵션명을 입력해 주세요. (필수)"
        onChange={e => saveOptionTitle(setIdx, optIdx, e)}
        value={optionSet[setIdx].option[optIdx].title}
      />
      원
      <input
        type="number"
        placeholder="상품 정상가(필수)"
        onChange={e => saveRegularPrice(setIdx, optIdx, e)}
      />
      원<span>{calcDiscount(setIdx, optIdx)} %</span>
      <input
        type="number"
        placeholder="상품 판매가(필수)"
        onChange={e => saveSalePrice(setIdx, optIdx, e)}
      />
      원
      <input
        type="number"
        placeholder="재고 (필수)"
        onChange={e => saveStock(setIdx, optIdx, e)}
      />{' '}
      개
      <select defaultValue="비과세" onChange={e => saveVAT(setIdx, optIdx, e)}>
        <option value="비과세">비과세</option>
        <option value="과세">과세</option>
      </select>
    </div>
  );
}

OptionBox.propTypes = {
  setIdx: propTypes.number.isRequired,
  optIdx: propTypes.number.isRequired,
  optionSet: propTypes.arrayOf(propTypes.object).isRequired,
  setOptionSet: propTypes.func.isRequired,
};

export default OptionBox;
