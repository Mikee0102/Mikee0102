export function renderParticles(theme) {
  const cssStyles = `
    @keyframes floatParticle {
      0% { transform: translateY(0px) scale(1); opacity: 0.3; }
      50% { transform: translateY(-12px) scale(1.2); opacity: 0.8; }
      100% { transform: translateY(0px) scale(1); opacity: 0.3; }
    }
    .particle {
      fill: ${theme.accent};
      animation: floatParticle 6s ease-in-out infinite;
    }
    .p1 { animation-delay: 0s; }
    .p2 { animation-delay: 2s; }
    .p3 { animation-delay: 4s; }
  `;

  const content = `
    <!-- Floating Particles -->
    <g class="particles">
      <circle cx="80" cy="70" r="2" class="particle p1" />
      <circle cx="320" cy="40" r="1.5" class="particle p2" />
      <circle cx="500" cy="90" r="2.5" class="particle p3" />
      <circle cx="780" cy="60" r="1.8" class="particle p1" />
      <circle cx="420" cy="280" r="2" class="particle p2" />
    </g>
  `;

  return { content, cssStyles };
}