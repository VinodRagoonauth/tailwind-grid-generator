import { CopyBlock, atomOneLight } from "react-code-blocks";

export default function Codebox({ generatedCode }) {
  return (
    <div className="m-5">
      <CopyBlock
        text={generatedCode}
        language="jsx"
        showLineNumbers={true}
        theme={atomOneLight}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
