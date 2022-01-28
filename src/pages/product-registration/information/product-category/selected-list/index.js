import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/information/product-category/selected-list/styles';

import { EMPTY_SELECTED_LIST_MESSAGE } from 'pages/product-registration/information/product-category/constants';

function SelectedCategoryList({ selected, setSelected }) {
  const deleteCategory = category => {
    const newSelected = selected.filter(item => item !== category);
    setSelected(newSelected);
  };

  if (!selected.length) {
    return <S.EmptyList>{EMPTY_SELECTED_LIST_MESSAGE}</S.EmptyList>;
  }

  return (
    <S.CategoryList>
      {selected.map(item => (
        <S.CategoryItem key={item}>
          {item}
          <S.RoundDeleteButton
            type="button"
            onClick={() => deleteCategory(item)}>
            X
          </S.RoundDeleteButton>
        </S.CategoryItem>
      ))}
    </S.CategoryList>
  );
}

SelectedCategoryList.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default SelectedCategoryList;
