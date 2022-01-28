import SideBar from 'components/common-layout/Sidebar';
import TopLogo from 'components/common-layout/TopLogo';
import TotalContainer, {
  StyledTotalContainer,
} from 'components/common-layout/TotalContainer';
import ImageTab from 'pages/product-registration/image-tab';

function ProductRegistration() {
  return (
    <div>
      <TopLogo />
      <SideBar />
      <StyledTotalContainer>
        <ImageTab tabTitle="상품 소개 이미지" />
        <ImageTab tabTitle="구매자 추천 이미지" />
      </StyledTotalContainer>
    </div>
  );
}

export default ProductRegistration;
