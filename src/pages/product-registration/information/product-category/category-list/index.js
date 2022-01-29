import PropTypes from 'prop-types';

import { CATEGORIES } from 'pages/product-registration/information/product-category/constants';

import * as S from 'pages/product-registration/information/product-category/category-list/styles';

function CategoryList({ selected, setSelected }) {
  const toggleCategory = category => {
    if (selected.includes(category)) {
      const newSelected = selected.filter(item => item !== category);
      setSelected(newSelected);
    } else {
      setSelected(prev => [...prev, category]);
    }
  };

  return (
    <S.CategoryList>
      {CATEGORIES.map(category => (
        <S.CategoryItem key={category}>
          <input
            id={category}
            type="checkbox"
            name="categories"
            value={category}
            checked={selected.includes(category)}
            onChange={() => toggleCategory(category)}
          />
          <label htmlFor={category}>{category}</label>
        </S.CategoryItem>
      ))}
    </S.CategoryList>
  );
}

CategoryList.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default CategoryList;
