import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CODE_CONTAINER_TITLE } from 'pages/product-registration/information/product-name/constants';

function ProductCode({ code }) {
  return (
    <CodeContainer>
      <h4>{CODE_CONTAINER_TITLE}</h4>
      <p>{code}</p>
    </CodeContainer>
  );
}

ProductCode.propTypes = {
  code: PropTypes.string,
};

ProductCode.defaultProps = {
  code: '',
};

const CodeContainer = styled.div`
  display: flex;
  width: 50%;

  & > * {
    display: flex;
    align-items: center;
  }

  & > h4 {
    padding: 1rem;
    padding-left: 1.25rem;
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    width: 100px;
  }

  & > p {
    padding: 1rem;
    flex-grow: 1;
    flex-shrink: 0;
  }
`;

export default ProductCode;
