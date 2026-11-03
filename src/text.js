// Plain-JS helpers (no JSX) so Node scripts such as prerender.mjs can import them.
export const stripLinks = (text) => String(text).replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
