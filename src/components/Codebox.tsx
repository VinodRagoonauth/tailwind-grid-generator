import { CopyBlock, atomOneDark } from "react-code-blocks";

export default function Codebox() {
  return (
    <div className="w-[550px] m-5">
      <CopyBlock
        text={`<div className="grid grid-cols-5 grid-rows-5 gap-4"> \n\t <div >1</div> \n</div>`}
        language="jsx"
        showLineNumbers={true}
        theme={atomOneDark}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
