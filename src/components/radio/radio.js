import * as S from 'components/radio/radio.style';
import propTypes from 'prop-types';

function Radio({ radioName, id, value }) {
  return (
    <S.RadioWrapper>
      <S.RadioButton name={radioName} id={id} />
      <S.Label htmlFor={id}>{value}</S.Label>
    </S.RadioWrapper>
  );
}
Radio.propTypes = {
  radioName: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
};

export default Radio;
