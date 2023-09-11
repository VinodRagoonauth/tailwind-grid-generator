import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Codebox from "./components/Codebox";
import { useState } from "react";

export default function App() {
  const [gridCols, setGridCols] = useState(5);
  const [gridRows, setGridRows] = useState(5);

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar />
      <main className="flex-1 flex-center flex-col">
        <header>
          <h1 className="text-2xl">How to use</h1>
        </header>
        <div className="flex-center w-full">
          <Codebox />
          <Grid gridCols={gridCols} gridRows={gridRows} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
