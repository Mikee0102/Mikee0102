import { renderBackground } from "../components/background.js";
import { renderParticles } from "../components/particles.js";
import { renderGlassCard } from "../components/glass.js";
import { renderTerminal } from "../components/terminal.js";
import { renderSkills } from "../components/skills.js";
import { renderByte } from "../components/byte.js";

export function generateBannerLayout(theme, profile) {
  // 1. Cargar componentes
  const bg = renderBackground(theme);
  const particles = renderParticles(theme);
  const glassPanelRight = renderGlassCard({ x: 510, y: 30, width: 310, height: 280 }, theme);
  const terminal = renderTerminal({ x: 30, y: 30, width: 460, height: 230 }, theme, profile);
  const skills = renderSkills({ x: 30, y: 275 }, theme, profile.skills);
  const byte = renderByte({ x: 500, y: 25 }, theme);

  // 2. Unir estilos CSS
  const cssStyles = `
    ${particles.cssStyles}
    ${glassPanelRight.cssStyles}
    ${terminal.cssStyles}
    ${skills.cssStyles}
    ${byte.cssStyles}
  `;

  // 3. Ensamblar capas SVG
  const content = `
    ${bg.content}
    ${particles.content}
    ${terminal.content}
    ${skills.content}
    ${glassPanelRight.content}
    ${byte.content}
  `;

  return { content, cssStyles };
}