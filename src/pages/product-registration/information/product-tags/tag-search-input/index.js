import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/information/product-tags/tag-search-input/styles';

import {
  SEARCH_BOX_PLACEHOLDER,
  SEARCH_BUTTON_TEXT,
} from 'pages/product-registration/information/product-tags/constants';

const TagSearchBox = forwardRef((props, ref) => {
  const { searchTerm, setSearchTerm, handleFocus } = props;

  const handleTagInput = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <S.TagSearchBox ref={ref}>
      <S.TagSearchInput
        type="text"
        value={searchTerm}
        onChange={handleTagInput}
        onFocus={handleFocus}
        placeholder={SEARCH_BOX_PLACEHOLDER}
      />
      <S.TagSearchButton type="button">{SEARCH_BUTTON_TEXT}</S.TagSearchButton>
    </S.TagSearchBox>
  );
});

TagSearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
};

export default TagSearchBox;
