import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex-center">
        <h1>Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
