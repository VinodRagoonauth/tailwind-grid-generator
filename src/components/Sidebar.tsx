import Codebox from "./Codebox";
import GridOptions from "./GridOptions";

interface GridOptionsProps {
  gridCols: number;
  gridRows: number;
  gridGap: number;
  generatedCode: string;
  setGridCols: (value: number) => void;
  setGridRows: (value: number) => void;
  setGridGap: (value: number) => void;
}

export default function Sidebar({
  gridCols,
  gridRows,
  gridGap,
  setGridCols,
  setGridRows,
  setGridGap,
  generatedCode,
}: GridOptionsProps) {
  return (
    <div className="flex flex-col justify-between gap-10 dark:bg-dark-secondary p-10">
      <div className="text-center dark:bg-[#102e2e] p-10 border-dark-primary border-2 rounded-md h-full ">
        <h1 className="dark:text-dark-primary text-6xl mb-10">How to Use</h1>
        <p className="dark:text-dark-accent">
          Step 1 ... <br />
          Step 2 ... <br />
          Step 3 ...
        </p>
      </div>
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
  );
}
