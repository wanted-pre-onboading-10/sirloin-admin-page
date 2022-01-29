import { useContext } from 'react';
import { ProductInfoContextStore } from 'context/product-info-context';
import * as S from 'pages/product-registration/option/styles';
import propTypes from 'prop-types';

function OptionImg({ idx }) {
  const { optionSet, setOptionSet } = useContext(ProductInfoContextStore);

  const readFileAsync = file => {
    const fileURL = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });

    return fileURL;
  };

  const saveOptionImage = async (setIdx, e) => {
    const option = [...optionSet];
    const file = e.target.files[0];

    if (file) {
      const fileURL = await readFileAsync(file);
      option[setIdx].image = `url(${fileURL})`;
      setOptionSet(option);
    }
  };

  return (
    <S.OptionImage>
      <S.OptionInputLabel htmlFor={`img-${idx}`} src={optionSet[idx].image}>
        <S.OptionInputBtn>+ 이미지 첨부</S.OptionInputBtn>
      </S.OptionInputLabel>
      <S.OptionImageInput
        id={`img-${idx}`}
        type="file"
        accept="image/*"
        onChange={e => saveOptionImage(idx, e)}
      />
    </S.OptionImage>
  );
}

OptionImg.propTypes = {
  idx: propTypes.number.isRequired,
};

export default OptionImg;
