
import { ReactNode } from "react";

export default function Prose({ children }: { children: ReactNode }) {
  return <div className="prose prose-slate max-w-none">{children}</div>;
}
