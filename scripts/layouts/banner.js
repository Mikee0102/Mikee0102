import { renderAsciiAvatar } from "../components/asciiAvatar.js";
import { renderTerminalV2 } from "../components/terminalV2.js";

export function generateBannerLayout(theme, profile) {
  const ascii = renderAsciiAvatar(40, 70, profile, theme);
  const terminal = renderTerminalV2(440, 70, profile, theme);

  const cssStyles = `
    ${ascii.cssStyles}
    ${terminal.cssStyles}

    @keyframes shimmer {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 1000; }
    }

    .bg-main {
      fill: ${theme.background};
    }

    .shimmer-border {
      stroke: url(#shimmerGrad);
      stroke-width: 1.5px;
      fill: none;
      stroke-dasharray: 200 800;
      animation: shimmer 12s linear infinite;
    }
  `;

  const content = `
    <!-- Background Canvas 1180x610 -->
    <rect width="1180" height="610" rx="24" class="bg-main" />

    <!-- Shimmer Glowing Border -->
    <defs>
      <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${theme.gradStart}" stop-opacity="0.8" />
        <stop offset="50%" stop-color="${theme.gradMid}" stop-opacity="0.8" />
        <stop offset="100%" stop-color="${theme.gradEnd}" stop-opacity="0.8" />
      </linearGradient>
    </defs>
    
    <rect width="1178" height="608" x="1" y="1" rx="23" class="shimmer-border" />

    <!-- Ambient Radial Glows -->
    <circle cx="200" cy="150" r="250" fill="${theme.gradStart}" opacity="0.08" filter="blur(60px)" />
    <circle cx="900" cy="450" r="300" fill="${theme.gradMid}" opacity="0.08" filter="blur(80px)" />

    <!-- Components -->
    ${ascii.content}
    ${terminal.content}
  `;

  return { content, cssStyles };
}