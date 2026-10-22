import { useSearchParams } from "react-router-dom";

// Opened through `?project=slug` so any page can show it.
export default function useOpenProject() {
  const [params, setParams] = useSearchParams();
  const slug = params.get("project");
  const open = (s) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("project", s);
        return next;
      },
      { replace: false },
    );
  const close = () =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete("project");
        return next;
      },
      { replace: true },
    );
  return { slug, open, close };
}
