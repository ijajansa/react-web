import Home from "./Home";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Switch,Routes } from 'react-router-dom';
import Category from "./Category";
import Product from "./Product";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Product />} />
      </Routes>
    </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;
