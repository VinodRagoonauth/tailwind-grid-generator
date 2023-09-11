import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Grid() {
  const generateGrid = () => {
    const domElements = [];
    for (let i = 1; i < 5; i++) {
      domElements.push(
        <div key={i} className="bg-black">
          <span className="p-8 text-white flex-center">{i}</span>
        </div>
      );
    }
    return domElements;
  };

  return (
    <div className="flex flex-col m-auto w-full max-w-[1024px] my-10 relative bg-gray-50">
      <ResponsiveGridLayout rowHeight={100} width={500}>
        {generateGrid()}
      </ResponsiveGridLayout>
    </div>
  );
}
