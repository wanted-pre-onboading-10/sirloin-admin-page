import SideBar from 'components/common-layout/Sidebar';
import TopBtn from 'components/common-layout/TopBtn';
import TopBar from 'components/common-layout/TopBar';
import ContentsContainer from 'components/common-layout/ContentsContainer';
import Grid from 'components/common-layout/Grid';

import Delivery from 'pages/product-registration/delivery';
import ImageTab from 'pages/product-registration/image-tab';
import Information from 'pages/product-registration/information';
import Misc from 'pages/product-registration/misc';
import Option from 'pages/product-registration/option';
import Period from 'pages/product-registration/period';
import Specs from 'pages/product-registration/specs';

function ProductRegistration() {
  return (
    <>
      <TopBar />
      <Grid>
        <SideBar />
        <div>
          <TopBtn />
          <ContentsContainer>
            <Period />
            <Information tabTitle="상품 기본 정보" />
            <Option />
            <ImageTab tabTitle="상품 소개 이미지" />
            <ImageTab tabTitle="구매자 추천 이미지" />
            <Specs />
            <Delivery />
            <Misc />
          </ContentsContainer>
        </div>
      </Grid>
    </>
  );
}

export default ProductRegistration;
