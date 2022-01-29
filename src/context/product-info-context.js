import { createContext, useState, useMemo } from 'react';
import propTypes from 'prop-types';

export const ProductInfoContextStore = createContext();

function ProductInfoContext({ children }) {
  const [optionSet, setOptionSet] = useState([]);
  const [stock, setStock] = useState(0);

  const ProductInfo = useMemo(
    () => ({ optionSet, setOptionSet, stock, setStock }),
    [optionSet, stock],
  );

  return (
    <ProductInfoContextStore.Provider value={ProductInfo}>
      {children}
    </ProductInfoContextStore.Provider>
  );
}

ProductInfoContext.propTypes = {
  children: propTypes.node.isRequired,
};

export default ProductInfoContext;
