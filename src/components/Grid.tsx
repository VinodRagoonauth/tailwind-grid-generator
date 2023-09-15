import RGL, { WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(RGL);

function Grid({ gridCols }: { gridCols: number; gridRows: number }) {
  const generateGrid = () => {
    const domElements = [];

    for (let i = 1; i <= gridCols; i++) {
      domElements.push(
        <div key={i} className="bg-[#e1e9f1] rounded-sm flex-center h-full">
          <span className="p-8 text-[#4c8bc9] font-bold">{i}</span>
        </div>
      );
    }

    return domElements;
  };

  return (
    <div className="flex flex-col w-full max-w-[1024px] absolute top-0 left-0 z-10 ">
      <ResponsiveGridLayout rowHeight={50} preventCollision={true}>
        {generateGrid()}
      </ResponsiveGridLayout>
    </div>
  );
}

export default Grid;
