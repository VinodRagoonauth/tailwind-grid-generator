import RGL, { WidthProvider } from "react-grid-layout";
import GridLayout from "./Grid";
const ResponsiveGridLayout = WidthProvider(RGL);

export default function BaseGrid({ gridCols, gridRows }: { gridCols: number; gridRows: number }) {
  const generateGrid = () => {
    const domElements = [];

    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        domElements.push(
          <div
            key={`item-${i}-${j}`}
            data-grid={{ x: i, y: j, w: 1, h: 1, static: true }}
            className="bg-gray-100 rounded-sm flex-center h-full"
          >
            <span className="p-8 text-gray-300 font-bold select-none">{"+"}</span>
          </div>
        );
      }
    }

    return domElements;
  };

  return (
    <div className="flex flex-col m-5 w-full max-w-[1024px] relative z-0 bg-gray-50">
      <ResponsiveGridLayout cols={gridCols} rowHeight={50} preventCollision={true}>
        {generateGrid()}
      </ResponsiveGridLayout>
      <GridLayout gridCols={gridCols} gridRows={gridRows} />
    </div>
  );
}
