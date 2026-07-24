export function renderGlassCard({ x, y, width, height, rx = 12 }, theme) {
  const cssStyles = `
    .glass-panel {
      fill: ${theme.cardBg};
      stroke: ${theme.borderColor};
      stroke-width: 1.2px;
      filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.25));
    }
  `;

  const content = `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" class="glass-panel" />
  `;

  return { content, cssStyles };
}