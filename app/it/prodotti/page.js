import Header from "../../../components/header";
import Footer from "../../../components/footer";
import ProductsHeader from "../../../components/productsHeader";
import ProductsList from "../../../components/productsList";

export const metadata = {
  title: "Prodotti | LayerData",
  description: "Prodotti creati in-house da LayerData per potenziare il tuo business con dati e tecnologia.",
};

export default function ProdottiPage() {
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

