import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders a markdown study note in the site's editorial voice —
 * serif headings, generous measure, framed figures and pull-quotes.
 */
export default function PostBody({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-[68ch]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2 className="font-serif text-h2 text-text-primary mt-20 mb-6 first:mt-0 pt-10 first:pt-0 border-t first:border-t-0 border-border">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h3 className="font-serif text-h3 text-text-primary mt-14 mb-4 text-[1.5rem]">
              {children}
            </h3>
          ),
          h3: ({ children }) => (
            <h4 className="font-mono text-label uppercase tracking-widest text-signal-blue mt-12 mb-4">
              {children}
            </h4>
          ),
          p: ({ node, children }) => {
            /* A standalone image renders as a <figure>, which is invalid
               inside a <p> — unwrap it. */
            const onlyChild =
              node?.children?.length === 1 ? node.children[0] : undefined;
            if (
              onlyChild &&
              onlyChild.type === "element" &&
              onlyChild.tagName === "img"
            ) {
              return <>{children}</>;
            }
            return (
              <p className="font-body text-body text-text-secondary mb-6">
                {children}
              </p>
            );
          },
          strong: ({ children }) => (
            <strong className="font-medium text-text-primary">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-text-primary/90">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 space-y-3 pl-0 list-none">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 space-y-3 pl-6 list-decimal marker:text-signal-blue marker:font-mono marker:text-caption">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="font-body text-body text-text-secondary relative pl-6 [ol_&]:pl-1">
              <span className="absolute left-0 top-[0.7em] w-2 h-px bg-signal-blue [ol_&]:hidden" />
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-10 border-l-2 border-signal-blue bg-surface/60 px-7 py-6 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_p]:text-text-primary/85 [&_p]:font-body">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="font-mono text-[0.85em] text-signal-blue bg-surface px-1.5 py-0.5 border border-border">
              {children}
            </code>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-text-primary underline underline-offset-4 decoration-border hover:decoration-signal-blue transition-colors"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-14 border-border" />,
          img: ({ src, alt }) => (
            <figure className="my-12">
              <div className="border border-border bg-surface p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={typeof src === "string" ? src : ""}
                  alt={alt ?? ""}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              {alt ? (
                <figcaption className="mt-3 font-mono text-micro text-text-secondary">
                  {alt}
                </figcaption>
              ) : null}
            </figure>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
