export function createSvgDocument({ width = 850, height = 340, content, cssStyles, easterEgg = "" }) {
  return `${easterEgg}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <style>
      ${cssStyles}
    </style>
  </defs>
  ${content}
</svg>`;
}