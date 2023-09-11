import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Codebox from "./components/Codebox";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar />
      <main className="flex-1 flex-center flex-col">
        <header>
          <h1 className="text-2xl">How to use</h1>
        </header>
        <Grid />
        <Codebox />
      </main>
      <Footer />
    </div>
  );
}

export default App;
