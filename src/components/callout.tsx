import { ReactNode } from "react";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={`boder-1 prose my-6 w-full items-start rounded-md border px-1 py-0 text-xl dark:prose-invert ${type === "warning" ? "border-yellow-700 bg-yellow-900" : type === "danger" ? "border-red-700 bg-red-900" : "border-dark_bg bg-dark_bg_secondary"}`}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
