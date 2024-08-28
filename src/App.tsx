import Header from "./components/Header"
import MainPage from "./components/MainPage"
import Footer from "./components/Footer"
import ProductCategoryProvider from "./context/ProductCategoryContext"

function App() {
  return (
    <>
      <ProductCategoryProvider>
        <Header />
        <MainPage />
        <Footer />
      </ProductCategoryProvider>
    </>
  )
}
export default App
