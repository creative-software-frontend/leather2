import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WetBlueSplitsPage from './pages/WetBlueSplitsPage';
import CowCrustPage from './pages/CowCrustPage';
import GoatCrustPage from './pages/GoatCrustPage';
import FinishLeatherPage from './pages/FinishLeatherPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<CatalogPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {/* Product pages */}
        <Route path="/products/wet-blue-splits" element={<WetBlueSplitsPage />} />
        <Route path="/products/cow-crust" element={<CowCrustPage />} />
        <Route path="/products/goat-crust" element={<GoatCrustPage />} />
        <Route path="/products/finish-leather" element={<FinishLeatherPage />} />
        {/* Category pages */}
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
