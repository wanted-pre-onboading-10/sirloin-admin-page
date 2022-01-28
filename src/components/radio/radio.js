import * as S from 'components/radio/radio.style';
import propTypes from 'prop-types';

function Radio({ radioName, id, label, checked, onChange }) {
  return (
    <S.RadioWrapper>
      <S.RadioButton
        name={radioName}
        id={id}
        defaultChecked={checked}
        onChange={onChange}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.RadioWrapper>
  );
}
Radio.propTypes = {
  radioName: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onChange: propTypes.func,
  checked: propTypes.bool,
};

Radio.defaultProps = {
  checked: false,
  onChange: () => null,
};

export default Radio;
