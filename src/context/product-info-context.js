import { createContext, useState, useMemo } from 'react';
import propTypes from 'prop-types';

export const ProductInfoContextStore = createContext();

function ProductInfoContext({ children }) {
  const [optionSet, setOptionSet] = useState([]);
  const [stock, setStock] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productName, setProductName] = useState('');
  const [productIntro, setProductIntro] = useState('');
  // 이 밑에 사용하고자하는 state 넣으시면 됩니다!

  const ProductInfo = useMemo(
    () => ({
      optionSet,
      setOptionSet,
      stock,
      setStock,
      selectedCategories,
      setSelectedCategories,
      productName,
      setProductName,
      productIntro,
      setProductIntro,
    }),
    [optionSet, stock, selectedCategories, productName, productIntro],
  ); // {} 안에는 모두 넣어주세요 [] 안에는 setState 제외하고 모두 넣어주세요!

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
