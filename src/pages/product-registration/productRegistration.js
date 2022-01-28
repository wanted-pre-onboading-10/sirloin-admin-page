import {
  CommonBtn,
  CommonSaveBtn,
  CommonDltRedBtn,
  CommonTransBtn,
  CommonDltSquareBtn,
  CommonSquareBtn,
} from 'components/common-button/CommonBtns';
import CommonInput from 'components/common-input/CommonInput';
import SideBar from 'components/common-layout/Sidebar';
import Delivery from 'pages/product-registration/delivery';
import ImageTab from 'pages/product-registration/image-tab';
import Information from 'pages/product-registration/information';
import Misc from 'pages/product-registration/misc';
import Option from 'pages/product-registration/option';
import Period from 'pages/product-registration/period';
import Specs from 'pages/product-registration/specs';

function ProductRegistration() {
  const title1 = '버튼1';
  const title2 = '버튼2';
  const title3 = '버튼3';
  const title4 = '버튼4';
  const title5 = '버튼5';
  const title6 = '버튼6';
  return (
    <div>
      <Period />
      <Information />
      <Option />
      <ImageTab />
      <Specs />
      <Delivery />
      <Misc />
      <SideBar />
      <CommonInput />
      <CommonBtn title={title1} />
      <CommonSaveBtn title={title2} />
      <CommonDltRedBtn title={title3} />
      <CommonTransBtn title={title4} />
      <CommonDltSquareBtn title={title5} />
      <CommonSquareBtn title={title6} />
    </div>
  );
}

export default ProductRegistration;
