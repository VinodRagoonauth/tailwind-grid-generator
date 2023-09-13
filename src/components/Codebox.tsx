import { CopyBlock, atomOneLight, atomOneDark } from "react-code-blocks";

export default function Codebox({ generatedCode }: { generatedCode: string }) {
  return (
    <div className="m-5">
      <CopyBlock
        // eslint-disable-next-line
        //@ts-ignore
        text={generatedCode}
        // TODO: Implement custom theme
        // Should be jsx, but haskell has more accurate highlighting
        language={"haskell"}
        showLineNumbers={true}
        theme={atomOneLight}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
