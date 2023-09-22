import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BaseGrid from "./components/BaseGrid";
import Codebox from "./components/Codebox";
import GridOptions from "./components/GridOptions";

import { useState } from "react";

export default function App() {
  const [gridCols, setGridCols] = useState<number>(12);
  const [gridRows, setGridRows] = useState<number>(12);
  const [gridGap, setGridGap] = useState<number>(5);

  const [generatedCodeProps, setGeneratedCodeProps] = useState<string>(
    `grid grid-cols-${gridCols} grid-rows-${gridRows} gap-${gridGap}`
  );
  const [generatedCode, setGeneratedCode] = useState<string>(
    `<div className="${generatedCodeProps}">\n\t<div>1</div>\n</div>`
  );

  return (
    <div className="flex flex-col min-h-screen font-inter dark:bg-dark-background">
      <Navbar />
      <main className="flex-1 flex-center flex-col">
        <header>{/* <h1 className="text-2xl">How to use</h1> */}</header>
        <div className="flex-center w-full lg:flex-row sm:flex-col md:flex-col">
          <BaseGrid gridCols={gridCols} gridRows={gridRows} />
          <div>
            <GridOptions
              gridCols={gridCols}
              setGridCols={setGridCols}
              gridRows={gridRows}
              setGridRows={setGridRows}
              gridGap={gridGap}
              setGridGap={setGridGap}
            />
            <Codebox generatedCode={generatedCode} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
