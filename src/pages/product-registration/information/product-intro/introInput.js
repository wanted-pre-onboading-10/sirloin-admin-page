import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function IntroInput({ placeholder }) {
  const [intro, setIntro] = useState('');

  return (
    <StyledInput
      type="text"
      value={intro}
      onChange={e => setIntro(e.target.value)}
      placeholder={placeholder}
    />
  );
}

IntroInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
`;

export default IntroInput;
