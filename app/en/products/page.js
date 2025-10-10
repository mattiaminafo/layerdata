import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ProductsHeader from "../../../components/productsHeader";
import ProductsList from "../../../components/productsList";

export const metadata = {
  title: "Products | LayerData",
  description: "In-house products created by LayerData to empower your business with data and technology.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <ProductsHeader />
        <ProductsList />
      </main>
      <Footer />
    </div>
  );
}

