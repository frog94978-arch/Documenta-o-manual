import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          img: ({ node, ...props }) => (
            <Dialog>
              <DialogTrigger asChild>
                <img
                  {...props}
                  className="rounded-lg border border-border shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity max-w-full h-auto"
                  alt={props.alt || "Imagem da documentação"}
                />
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-1 bg-background/95 border-none shadow-none flex items-center justify-center">
                <img
                  src={props.src}
                  alt={props.alt || "Imagem ampliada"}
                  className="max-w-full max-h-[90vh] object-contain rounded-md"
                />
              </DialogContent>
            </Dialog>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
