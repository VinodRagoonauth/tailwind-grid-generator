import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BaseGrid from "./components/BaseGrid";
import Grid from "./components/Grid";
import Codebox from "./components/Codebox";
import { useState } from "react";

export default function App() {
  const [gridCols, setGridCols] = useState<number>(12);
  const [gridRows, setGridRows] = useState<number>(12);
  const [gridGap, setgridGap] = useState<number>(5);

  const [generatedCodeProps, setGeneratedCodeProps] = useState<string>(
    `grid grid-cols-${gridCols} grid-rows-${gridRows} gap-${gridGap}`
  );
  const [generatedCode, setGeneratedCode] = useState<string>(
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
          {/* <Grid gridCols={gridCols} gridRows={gridRows} /> */}
          <BaseGrid gridCols={gridCols} gridRows={gridRows} />
          <Codebox generatedCode={generatedCode} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
