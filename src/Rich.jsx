import { stripLinks } from './text.js';
export { stripLinks };

// Renders [text](url) links inside a string. Shared by blog articles and FAQ accordions.

export default function Rich({ text }) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? (
      <a key={i} href={m[2]}>
        {m[1]}
      </a>
    ) : (
      part
    );
  });
}
