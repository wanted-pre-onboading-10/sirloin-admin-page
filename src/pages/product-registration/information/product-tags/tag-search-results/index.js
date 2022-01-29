import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/information/product-tags/tag-search-results/styles';

import { NO_SEARCH_RESULTS_MESSAGE } from 'pages/product-registration/information/product-tags/constants';

const TagSearchResults = forwardRef((props, ref) => {
  const { searchResults, showSearchResults, selectedTags, setSelectedTags } =
    props;

  if (!searchResults.length) {
    return (
      <S.NoSearchResults showSearchResults={showSearchResults} ref={ref}>
        {NO_SEARCH_RESULTS_MESSAGE}
      </S.NoSearchResults>
    );
  }

  const selectTag = tag => {
    if (selectedTags.includes(tag)) return;
    setSelectedTags(prev => [...prev, tag]);
  };

  return (
    <S.TagSearchResults showSearchResults={showSearchResults} ref={ref}>
      {searchResults.map(tag => (
        <S.TagItem
          key={tag}
          onClick={() => {
            selectTag(tag);
          }}>
          {tag}
        </S.TagItem>
      ))}
    </S.TagSearchResults>
  );
});

TagSearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.string).isRequired,
  showSearchResults: PropTypes.bool.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedTags: PropTypes.func.isRequired,
};

export default TagSearchResults;
