import { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ProductInfoContextStore } from 'context/product-info-context';

function IntroInput({ placeholder }) {
  const { productIntro, setProductIntro } = useContext(ProductInfoContextStore);

  return (
    <StyledInput
      type="text"
      value={productIntro}
      onChange={e => setProductIntro(e.target.value)}
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
