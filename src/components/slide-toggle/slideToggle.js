import propTypes from 'prop-types';
import * as S from 'components/slide-toggle/slideToggle.style';

function SlideToggle({ type, name, id, onChange, checked }) {
  return (
    <S.Container>
      <S.StyledInput
        type={type}
        name={name}
        id={id}
        value={id}
        onChange={onChange}
        defaultChecked={checked}
      />
    </S.Container>
  );
}

SlideToggle.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  checked: propTypes.bool,
  onChange: propTypes.func,
};

SlideToggle.defaultProps = {
  type: 'checkbox',
  name: null,
  id: '',
  checked: false,
  onChange: () => null,
};

export default SlideToggle;
