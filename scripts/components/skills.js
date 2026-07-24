export function renderSkills({ x = 30, y = 280 }, theme, skills) {
  const cssStyles = `
    .skill-badge {
      fill: ${theme.cardBg};
      stroke: ${theme.borderColor};
      stroke-width: 1px;
      rx: 6px;
    }
    .skill-text {
      fill: ${theme.textPrimary};
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 11px;
      font-weight: 600;
    }
  `;

  let currentX = x;
  const badgeHeight = 24;
  const paddingX = 12;

  const badgesContent = skills.slice(0, 6).map((skill) => {
    const textWidth = skill.length * 7;
    const badgeWidth = textWidth + paddingX * 2;
    const itemX = currentX;
    currentX += badgeWidth + 8;

    return `
      <g transform="translate(${itemX}, ${y})">
        <rect width="${badgeWidth}" height="${badgeHeight}" class="skill-badge" />
        <text x="${badgeWidth / 2}" y="16" text-anchor="middle" class="skill-text">${skill}</text>
      </g>
    `;
  }).join("");

  return { content: `<g class="skills-container">${badgesContent}</g>`, cssStyles };
}