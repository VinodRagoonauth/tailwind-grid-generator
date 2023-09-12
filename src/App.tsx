import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Codebox from "./components/Codebox";
import { useState } from "react";

export default function App() {
  const [gridCols, setGridCols] = useState(5);
  const [gridRows, setGridRows] = useState(5);
  const [gridGap, setgridGap] = useState(5);

  const [generatedCodeProps, setGeneratedCodeProps] = useState(
    `grid grid-cols-${gridCols} grid-rows-${gridRows} gap-${gridGap}`
  );
  const [generatedCode, setGeneratedCode] = useState(
    `<div className="${generatedCodeProps}"> \n\t <div >1</div> \n</div>`
  );

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar />
      <main className="flex-1 flex-center flex-col">
        <header>
          <h1 className="text-2xl">How to use</h1>
        </header>
        <div className="flex-center w-full lg:flex-row sm:flex-col md:flex-col">
          <Grid gridCols={gridCols} gridRows={gridRows} />
          <Codebox generatedCode={generatedCode} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
