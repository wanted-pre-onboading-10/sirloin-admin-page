import PropTypes from 'prop-types';
import styled from 'styled-components';

function NameInput({ name, placeholder, setName }) {
  return (
    <StyledInput
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder={placeholder}
    />
  );
}

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

const StyledInput = styled.input`
  padding: 0.75rem;
  width: 100%;
`;

export default NameInput;
