import { ChangeEvent } from "react";

interface GridOptionsProps {
  gridCols: number;
  gridRows: number;
  gridGap: number;
  setGridCols: (value: number) => void;
  setGridRows: (value: number) => void;
  setGridGap: (value: number) => void;
}

export default function GridOptions({
  gridCols,
  gridRows,
  gridGap,
  setGridCols,
  setGridRows,
  setGridGap,
}: GridOptionsProps) {
  const handleGridColsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setGridCols(value);
  };

  const handleGridRowsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setGridRows(value);
  };

  const handleGridGapChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setGridGap(value);
  };

  return (
    <div className="flex-center gap-5">
      <div className="dark:bg-dark-secondary p-4 rounded-md dark:text-dark-primary font-bold flex-center gap-4">
        Cols
        <input
          className="dark:bg-dark-background p-2 rounded-lg w-16"
          type="number"
          value={gridCols}
          onChange={handleGridColsChange}
          max={12}
          min={1}
        />
      </div>
      <div className="dark:bg-dark-secondary p-4 rounded-md dark:text-dark-primary font-bold flex-center gap-4">
        Rows
        <input
          className="dark:bg-dark-background p-2 rounded-lg w-16"
          type="number"
          value={gridRows}
          onChange={handleGridRowsChange}
          max={12}
          min={1}
        />
      </div>
      <div className="dark:bg-dark-secondary p-4 rounded-md dark:text-dark-primary font-bold flex-center gap-4">
        Gap
        <input
          className="dark:bg-dark-background p-2 rounded-lg w-16"
          type="number"
          value={gridGap}
          onChange={handleGridGapChange}
          max={12}
          min={0}
        />
      </div>
    </div>
  );
}
