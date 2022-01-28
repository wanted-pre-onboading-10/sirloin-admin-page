import IntroInput from 'pages/product-registration/information/product-intro/introInput';
import * as S from 'pages/product-registration/information/styles';

const data = {
  title: '상품 구성 소개 정보',
  placeholder: '상품 구성 소개 정보를 입력해주세요',
};

function ProductIntroSubSection() {
  return (
    <S.SubSection>
      <S.SubSectionTitle>{data.title}</S.SubSectionTitle>
      <S.SubSectionContents>
        <IntroInput placeholder={data.placeholder} />
      </S.SubSectionContents>
    </S.SubSection>
  );
}

export default ProductIntroSubSection;
