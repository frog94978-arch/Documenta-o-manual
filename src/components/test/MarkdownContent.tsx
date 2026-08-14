import { isValidElement, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const [expandedImageSrc, setExpandedImageSrc] = useState<string | null>(null);

  const toggleImage = (src?: string) => {
    if (!src) {
      return;
    }

    setExpandedImageSrc((current) => (current === src ? null : src));
  };

  const hasImageChild = (children: unknown): boolean => {
    const list = Array.isArray(children) ? children : [children];

    return list.some((child) => {
      if (!isValidElement(child)) {
        return false;
      }

      if (child.type === "img") {
        return true;
      }

      const childProps = child.props as { children?: unknown };
      return hasImageChild(childProps.children);
    });
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ({ node, children, ...props }) => {
            const href = props.href || "";
            const isImageHref = /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(href);

            if (hasImageChild(children) || isImageHref) {
              return <span>{children}</span>;
            }

            return (
              <a {...props} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
          img: ({ node, ...props }) => {
            const isExpanded = expandedImageSrc === props.src;

            return (
              <img
                {...props}
                onClick={() => toggleImage(props.src)}
                className={`rounded-lg border border-border shadow-sm transition-opacity max-w-full h-auto ${isExpanded ? "cursor-zoom-out" : "cursor-zoom-in hover:opacity-90"}`}
                alt={props.alt || "Imagem da documentação"}
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>

      {expandedImageSrc ? (
        <div
          className="fixed inset-0 z-50 bg-black/70 p-4 flex items-center justify-center"
          onClick={() => setExpandedImageSrc(null)}
        >
          <img
            src={expandedImageSrc}
            alt="Imagem ampliada"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-md cursor-zoom-out"
            onClick={(event) => {
              event.stopPropagation();
              setExpandedImageSrc(null);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default MarkdownContent;
