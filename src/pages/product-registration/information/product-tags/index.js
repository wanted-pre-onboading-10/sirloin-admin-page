import { useState, useEffect, useCallback, useRef } from 'react';

import TagSearchBox from 'pages/product-registration/information/product-tags/tag-search-input';
import TagSearchResults from 'pages/product-registration/information/product-tags/tag-search-results';
import SelectedTagBox from 'pages/product-registration/information/product-tags/selected-tags';

import * as S from 'pages/product-registration/information/styles';

import {
  TAGS,
  SUB_SECTION_TITLE,
} from 'pages/product-registration/information/product-tags/constants';

function ProductTagSubSection() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(TAGS);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const foundTagsRef = useRef(null);
  const tagsInputRef = useRef(null);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([...TAGS]);
    } else {
      const filteredTags = TAGS.filter(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchResults(filteredTags);
    }
  }, [searchTerm]);

  const handleFocus = useCallback(e => {
    e.stopPropagation();
    setShowSearchResults(true);
  });

  const handleClickOutsideTagSearchResults = useCallback(e => {
    if (
      foundTagsRef.current &&
      tagsInputRef.current &&
      !foundTagsRef.current.contains(e.target) &&
      !tagsInputRef.current.contains(e.target)
    ) {
      setShowSearchResults(false);
    }
  });

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideTagSearchResults);
    return () => {
      document.removeEventListener('click', handleClickOutsideTagSearchResults);
    };
  });

  return (
    <S.SubSection>
      <S.SubSectionTitle>{SUB_SECTION_TITLE}</S.SubSectionTitle>
      <S.TagSectionContents>
        <TagSearchBox
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleFocus={handleFocus}
          ref={tagsInputRef}
        />
        <TagSearchResults
          searchResults={searchResults}
          showSearchResults={showSearchResults}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          ref={foundTagsRef}
        />
        <SelectedTagBox
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </S.TagSectionContents>
    </S.SubSection>
  );
}

export default ProductTagSubSection;
