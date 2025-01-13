import type { ComponentPropsWithoutRef } from "react";
import NextLink from "next/link";

type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export function Link({ href, children, ...props }: LinkProps) {
  if (typeof href === "string" && "target" in props) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
