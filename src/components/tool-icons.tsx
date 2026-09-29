import type { ToolId } from "@/content/site";

const sources: Record<ToolId, string> = {
  "after-effects": "/apps/after-effects.svg",
  illustrator: "/apps/illustrator.svg",
  photoshop: "/apps/photoshop.svg",
  capcut: "/apps/capcut.png",
  blender: "/apps/blender.svg",
  cursor: "/apps/cursor.svg",
};

export function ToolIcon({ id }: { id: ToolId }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={sources[id]} alt="" />;
}
