import SideBar from 'components/common-layout/Sidebar';
import TopLogo from 'components/common-layout/TopLogo';
import TotalContainer from 'components/common-layout/TotalContainer';

function ProductRegistration() {
  return (
    <div>
      <Period />
      <Information />
      <Option />
      <ImageTab tabTitle="상품 소개 이미지" />
      <ImageTab tabTitle="구매자 추천 이미지" />
      <Specs />
      <Delivery />
      <Misc />
    </div>
  );
}

export default ProductRegistration;
