import IntroInput from 'pages/product-registration/information/product-intro/introInput';

import * as Shared from 'styles/shared';

const data = {
  title: '상품 구성 소개 정보 *',
  placeholder: '상품 구성 소개 정보를 입력해주세요',
};

function ProductIntroSubSection() {
  return (
    <Shared.SubSection>
      <Shared.SubSectionTitle>{data.title}</Shared.SubSectionTitle>
      <Shared.SubSectionContents>
        <IntroInput placeholder={data.placeholder} />
      </Shared.SubSectionContents>
    </Shared.SubSection>
  );
}

export default ProductIntroSubSection;
