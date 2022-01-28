import propTypes from 'prop-types';
import * as S from 'pages/product-registration/option/styles';

function OptionImg({ idx, optionSet, setOptionSet }) {
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
      option[setIdx].image = fileURL;
      setOptionSet(option);
    }
  };

  return (
    <S.OptionImage>
      <img src={optionSet[idx].image} width={150} alt="option" />

      <input
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
  optionSet: propTypes.arrayOf(propTypes.object).isRequired,
  setOptionSet: propTypes.func.isRequired,
};

export default OptionImg;
