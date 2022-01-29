import { useContext } from 'react';
import { ProductInfoContextStore } from 'context/product-info-context';

import * as Shared from 'styles/shared';

import CategoryList from 'pages/product-registration/information/product-category/category-list';
import SelectedList from 'pages/product-registration/information/product-category/selected-list';

const SECTION_TITLE = '카테고리 *';

function CategorySubSection() {
  const { selectedCategories, setSelectedCategories } = useContext(
    ProductInfoContextStore,
  );

  return (
    <Shared.SubSection>
      <Shared.SubSectionTitle>{SECTION_TITLE}</Shared.SubSectionTitle>
      <Shared.SubSectionContents>
        <CategoryList
          selected={selectedCategories}
          setSelected={setSelectedCategories}
        />
        <SelectedList
          selected={selectedCategories}
          setSelected={setSelectedCategories}
        />
      </Shared.SubSectionContents>
    </Shared.SubSection>
  );
}

export default CategorySubSection;
