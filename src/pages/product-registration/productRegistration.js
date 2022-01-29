import SideBar from 'components/common-layout/Sidebar';
import TopBtn from 'components/common-layout/TopBtn';
import TopLogo from 'components/common-layout/TopLogo';
import Container from 'components/common-layout/TotalContainer';
import ImageTab from 'pages/product-registration/image-tab';

function ProductRegistration() {
  return (
    <div>
      <TopLogo />
      <SideBar />
      <TopBtn />
      <Container>
        <ImageTab tabTitle="상품 소개 이미지" />
        <ImageTab tabTitle="구매자 추천 이미지" />
      </Container>
    </div>
  );
}

export default ProductRegistration;
