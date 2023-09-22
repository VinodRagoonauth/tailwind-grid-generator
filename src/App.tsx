import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BaseGrid from "./components/BaseGrid";
import Sidebar from "./components/Sidebar";

import { useState } from "react";

// TODO: Switch to useContext
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
        <div className="flex justify-between content-center w-full lg:flex-row-reverse sm:flex-col md:flex-col">
          <BaseGrid gridCols={gridCols} gridRows={gridRows} />
          <Sidebar
            gridCols={gridCols}
            setGridCols={setGridCols}
            gridRows={gridRows}
            setGridRows={setGridRows}
            gridGap={gridGap}
            setGridGap={setGridGap}
            generatedCode={generatedCode}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
