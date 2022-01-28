import { useState } from 'react';

import * as S from 'pages/product-registration/information/styles';

import CategoryList from 'pages/product-registration/information/product-category/category-list';
import SelectedList from 'pages/product-registration/information/product-category/selected-list';

function CategorySubSection() {
  const [selected, setSelected] = useState([]);

  return (
    <S.SubSection>
      <S.SubSectionTitle>카테고리</S.SubSectionTitle>
      <S.SubSectionContents>
        <CategoryList selected={selected} setSelected={setSelected} />
        <SelectedList selected={selected} setSelected={setSelected} />
      </S.SubSectionContents>
    </S.SubSection>
  );
}

export default CategorySubSection;
