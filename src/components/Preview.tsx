import { useSelector } from "react-redux";
import CodeSyntaxHighlighter from "./CodeSyntaxHighlighter";
import type { RootState } from "../app/store";
import FileBar from "./FileBar";

const Preview = () => {
  const {
    selectedFile: { fileContent },
  } = useSelector(({ tree }: RootState) => tree);

  return (
    <>
      <FileBar />
      <CodeSyntaxHighlighter content={fileContent} />
    </>
  );
};

export default Preview;
