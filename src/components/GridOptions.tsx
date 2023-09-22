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
  return (
    <div className="flex-center gap-5">
      <div className="dark:bg-dark-secondary p-4 rounded-md dark:text-dark-primary font-bold flex-center gap-4">
        Cols
        <input
          className="dark:bg-dark-background p-2 rounded-lg w-16"
          type="number"
          value={gridCols}
          onChange={(e) => setGridCols(e.target.value)}
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
          onChange={(e) => setGridRows(e.target.value)}
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
          onChange={(e) => setGridGap(e.target.value)}
          max={12}
          min={1}
        />
      </div>
    </div>
  );
}
