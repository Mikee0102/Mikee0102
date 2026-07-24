export function renderBackground(theme) {
  const content = `
    <!-- Background Base -->
    <rect width="100%" height="100%" fill="${theme.background}" rx="16" />
    
    <!-- Grid Pattern -->
    <defs>
      <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="${theme.borderColor}" stroke-width="0.5" opacity="0.3" />
      </pattern>
      <radialGradient id="glow" cx="50%" cy="0%" r="70%">
        <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.15" />
        <stop offset="100%" stop-color="${theme.background}" stop-opacity="0" />
      </radialGradient>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#grid)" rx="16" />
    <rect width="100%" height="100%" fill="url(#glow)" rx="16" />
  `;

  return { content };
}