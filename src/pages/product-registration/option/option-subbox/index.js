import propTypes from 'prop-types';
import * as S from 'pages/product-registration/option/styles';

import { getIdx } from 'pages/product-registration/option/utils';
import tree from 'pages/product-registration/option/option-subbox/tree.png';

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

    option[set].option[opt].subOption[sub].title = e.target.value;
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
          <S.SubOptionTree src={tree} />
          <S.SubOptionBox>
            <div>
              <S.InputText
                type="text"
                placeholder="추가 옵션명 (필수)"
                onChange={e => saveSubOptionTitle(setIdx, optIdx, subIdx, e)}
                width="380px"
              />
            </div>
            <div>
              <S.InputText
                type="number"
                placeholder="추가 옵션 정상가 (필수)"
                onChange={e => saveSubRegularPrice(setIdx, optIdx, subIdx, e)}
                width="250px"
              />
              원
            </div>
            <S.DeleteBtn
              type="button"
              value={`${setIdx}/${optIdx}/${subIdx}`}
              onClick={removeSubOption}>
              삭제
            </S.DeleteBtn>
          </S.SubOptionBox>
        </div>
      ))}
      <div>
        <S.PlusBtn
          type="button"
          value={`${setIdx}/${optIdx}`}
          onClick={addSubOption}>
          +
        </S.PlusBtn>
        <S.PlusBtnLabel>추가 옵션 상품 등록</S.PlusBtnLabel>
      </div>
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
