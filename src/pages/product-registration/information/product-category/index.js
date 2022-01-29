import { useState } from 'react';

import * as Shared from 'styles/shared';

import CategoryList from 'pages/product-registration/information/product-category/category-list';
import SelectedList from 'pages/product-registration/information/product-category/selected-list';

function CategorySubSection() {
  const [selected, setSelected] = useState([]);

  return (
    <Shared.SubSection>
      <Shared.SubSectionTitle>카테고리</Shared.SubSectionTitle>
      <Shared.SubSectionContents>
        <CategoryList selected={selected} setSelected={setSelected} />
        <SelectedList selected={selected} setSelected={setSelected} />
      </Shared.SubSectionContents>
    </Shared.SubSection>
  );
}

export default CategorySubSection;
