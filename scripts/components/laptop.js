export function renderLaptopAndCoffee(theme) {
  const cssStyles = `
    @keyframes coffeeSteam {
      0% { transform: translateY(0) scaleX(1); opacity: 0; }
      50% { opacity: 0.6; }
      100% { transform: translateY(-8px) scaleX(1.3); opacity: 0; }
    }
    .steam {
      stroke: ${theme.textSecondary};
      stroke-width: 1.2;
      stroke-linecap: round;
      fill: none;
      animation: coffeeSteam 3s ease-in-out infinite;
    }
    .steam-2 { animation-delay: 1.5s; }
  `;

  const content = `
    <!-- Laptop -->
    <g transform="translate(0, 0)">
      <!-- Pantalla / Tapa de laptop -->
      <path d="M 25 10 L 75 10 L 80 45 L 20 45 Z" fill="${theme.terminalBg}" stroke="${theme.borderColor}" stroke-width="1.2" />
      <!-- Logo brillando en la tapa -->
      <circle cx="50" cy="26" r="3.5" fill="${theme.accent}" opacity="0.9" />
      <!-- Base de la laptop -->
      <path d="M 12 45 L 88 45 L 84 50 L 16 50 Z" fill="${theme.borderColor}" />
    </g>

    <!-- Taza de Café -->
    <g transform="translate(98, 26)">
      <!-- Humo del café -->
      <path d="M 4 0 Q 2 -4 4 -8" class="steam" />
      <path d="M 9 -1 Q 11 -5 9 -9" class="steam steam-2" />
      <!-- Taza -->
      <rect x="0" y="0" width="13" height="15" rx="3" fill="${theme.cardBg}" stroke="${theme.borderColor}" stroke-width="1" />
      <!-- Asa de la taza -->
      <path d="M 13 3 C 17 3, 17 11, 13 11" fill="none" stroke="${theme.borderColor}" stroke-width="1" />
    </g>
  `;

  return { content, cssStyles };
}