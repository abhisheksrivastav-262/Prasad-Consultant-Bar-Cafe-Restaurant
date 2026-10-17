import { SITE } from "./site";

export function waLink(message: string) {
  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(message)}`;
}
