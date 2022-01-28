import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/information/product-tags/selected-tags/styles';

import { SELECTED_TAGS_BOX_TITLE } from 'pages/product-registration/information/product-tags/constants';

function SelectedTagBox({ selectedTags, setSelectedTags }) {
  if (!selectedTags.length) return null;

  const deleteItem = tag => {
    const newSelectedTags = selectedTags.filter(item => item !== tag);
    setSelectedTags(newSelectedTags);
  };

  return (
    <S.SelectedTagsBox>
      <S.SelectedTagsHeading>{SELECTED_TAGS_BOX_TITLE}</S.SelectedTagsHeading>
      <S.SelectedTagsList>
        {selectedTags.map(tag => (
          <S.SelectedTagItem key={tag}>
            <span>{tag}</span>
            <S.DeleteTagButton type="button" onClick={() => deleteItem(tag)}>
              X
            </S.DeleteTagButton>
          </S.SelectedTagItem>
        ))}
      </S.SelectedTagsList>
    </S.SelectedTagsBox>
  );
}

SelectedTagBox.propTypes = {
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedTags: PropTypes.func.isRequired,
};

export default SelectedTagBox;
