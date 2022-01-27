import Delivery from 'pages/product-registration/delivery';
import ImageTab from 'pages/product-registration/image-tab';
import Information from 'pages/product-registration/information';
import Misc from 'pages/product-registration/misc';
import Option from 'pages/product-registration/option';
import Period from 'pages/product-registration/period';
import Specs from 'pages/product-registration/specs';

function ProductRegistration() {
  return (
    <div>
      <Period />
      <Information />
      <Option />
      <ImageTab />
      <Specs />
      <Delivery />
      <Misc />
    </div>
  );
}

export default ProductRegistration;
