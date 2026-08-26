import type { AnchorHTMLAttributes, ReactNode } from "react";

type CtaLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  eventName?: string;
  variant?: "primary" | "secondary" | "text";
};

export function CtaLink({ href, children, eventName, variant = "primary", className = "", ...props }: CtaLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`cta-link cta-${variant} ${className}`.trim()}
      data-analytics-event={eventName}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
