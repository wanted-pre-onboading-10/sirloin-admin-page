import ProductRegistration from 'pages/product-registration';
import ProductInfoContext from 'context/product-info-context';

function App() {
  return (
    <ProductInfoContext>
      <ProductRegistration />
    </ProductInfoContext>
  );
}

export default App;
