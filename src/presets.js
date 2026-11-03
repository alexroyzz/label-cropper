// Crop fallback areas as fractions of the page; y is measured from the top.
// Automatic text detection is used first for Flipkart and Meesho; these presets cover manual mode or missed pages.
// A newly added marketplace can start from FULL_PAGE so nothing is cut until the user sets the crop area.
const FULL_PAGE = { x: 0, y: 0, w: 1, h: 1 };
export const DEFAULT_PRESETS = {
  flipkart: { x: 0.317, y: 0.0315, w: 0.366, h: 0.4235 },
  meesho: { x: 0.0202, y: 0.0143, w: 0.9597, h: 0.3985 },
};
