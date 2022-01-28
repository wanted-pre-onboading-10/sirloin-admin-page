import propTypes from 'prop-types';
import * as S from 'pages/product-registration/option/styles';

function OptionTop({ optionSet, setOptionSet }) {
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
    <S.SectionTitle>
      <span>상품 옵션*</span>
      <button type="button" onClick={addOptionSet}>
        + 옵션 세트 추가
      </button>
    </S.SectionTitle>
  );
}

OptionTop.propTypes = {
  optionSet: propTypes.arrayOf(propTypes.object).isRequired,
  setOptionSet: propTypes.func.isRequired,
};

export default OptionTop;
