import { renderLaptopAndCoffee } from "./laptop.js";

export function renderByte({ x = 520, y = 40 }, theme) {
  const laptopAndCoffee = renderLaptopAndCoffee(theme);

  const cssStyles = `
    ${laptopAndCoffee.cssStyles}

    /* Secuencia animada para los pensamientos de Byte */
    @keyframes thoughtCycle {
      0%, 18% { opacity: 0; transform: translateY(4px); }
      22%, 36% { opacity: 1; transform: translateY(0); }
      40%, 100% { opacity: 0; transform: translateY(-4px); }
    }

    .thought-bubble {
      fill: ${theme.terminalBg};
      stroke: ${theme.borderColor};
      stroke-width: 1.2px;
      filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.15));
    }

    .thought-text {
      font-family: 'Fira Code', Consolas, monospace;
      font-size: 11px;
      font-weight: 600;
      fill: ${theme.accent};
      text-anchor: middle;
    }

    .thought-sub {
      font-family: system-ui, sans-serif;
      font-size: 10px;
      fill: ${theme.textPrimary};
      text-anchor: middle;
    }

    /* Animación secuenciada para cada frase */
    .t-step-1 { animation: thoughtCycle 16s infinite 0s; }
    .t-step-2 { animation: thoughtCycle 16s infinite 4s; }
    .t-step-3 { animation: thoughtCycle 16s infinite 8s; }
    .t-step-4 { animation: thoughtCycle 16s infinite 12s; }

    /* Parpadeo suave de orejas / cola */
    @keyframes tailWag {
      0%, 100% { transform: rotate(0deg); }
      50% { transform: rotate(6deg); }
    }
    .cat-tail {
      transform-origin: 190px 185px;
      animation: tailWag 4s ease-in-out infinite;
    }
  `;

  const content = `
    <g transform="translate(${x}, ${y})">

      <!-- 💭 GLOBO DE PENSAMIENTOS DE BYTE (Secuencial) -->
      <g transform="translate(45, 10)">
        <!-- Burbuja base -->
        <path d="M 10 30 Q 0 30 0 20 L 0 -15 Q 0 -25 10 -25 L 180 -25 Q 190 -25 190 -15 L 190 20 Q 190 30 180 30 L 50 30 L 35 42 L 38 30 Z" class="thought-bubble" />

        <!-- Frase 1: Dreaming about code... -->
        <g class="t-step-1">
          <text x="95" y="-5" class="thought-text">zZ</text>
          <text x="95" y="12" class="thought-sub">Dreaming about code...</text>
        </g>

        <!-- Frase 2: Thinking in Python... -->
        <g class="t-step-2">
          <text x="95" y="-5" class="thought-text">zZ</text>
          <text x="95" y="12" class="thought-sub">Thinking in Python...</text>
        </g>

        <!-- Frase 3: Compiling dreams... -->
        <g class="t-step-3">
          <text x="95" y="-5" class="thought-text">zZ</text>
          <text x="95" y="12" class="thought-sub">Compiling dreams...</text>
        </g>

        <!-- Frase 4: One more commit... -->
        <g class="t-step-4">
          <text x="95" y="-5" class="thought-text">zZ</text>
          <text x="95" y="12" class="thought-sub">One more commit...</text>
        </g>
      </g>

      <!-- 🐱 BYTE EL GATO (Cuerpo durmiendo) -->
      <g transform="translate(50, 85)">
        <!-- Cola del gato -->
        <path d="M 180 135 C 200 135, 205 105, 190 100 C 185 98, 180 110, 175 125 Z" fill="${theme.catDetail}" class="cat-tail" />

        <!-- Cuerpo ecurrucado -->
        <ellipse cx="120" cy="130" rx="55" ry="32" fill="${theme.catBody}" stroke="${theme.borderColor}" stroke-width="1.5" />

        <!-- Cabeza apoyada -->
        <circle cx="75" cy="125" r="26" fill="${theme.catBody}" stroke="${theme.borderColor}" stroke-width="1.5" />

        <!-- Oreja Izquierda -->
        <path d="M 58 106 L 50 86 L 70 98 Z" fill="${theme.catBody}" stroke="${theme.borderColor}" stroke-width="1.5" />
        <path d="M 60 104 L 54 90 L 68 98 Z" fill="${theme.accent}" opacity="0.6" />

        <!-- Oreja Derecha -->
        <path d="M 80 101 L 88 82 L 94 104 Z" fill="${theme.catBody}" stroke="${theme.borderColor}" stroke-width="1.5" />
        <path d="M 82 100 L 87 87 L 92 102 Z" fill="${theme.accent}" opacity="0.6" />

        <!-- Ojos durmiendo (Líneas curvas 'u') -->
        <path d="M 62 124 Q 67 130 72 124" fill="none" stroke="${theme.textPrimary}" stroke-width="2" stroke-linecap="round" />
        <path d="M 78 124 Q 83 130 88 124" fill="none" stroke="${theme.textPrimary}" stroke-width="2" stroke-linecap="round" />

        <!-- Nariz y Bigotes -->
        <polygon points="74,129 78,129 76,132" fill="${theme.accent}" />
        <!-- Bigotes Izquierda -->
        <line x1="52" y1="126" x2="62" y2="128" stroke="${theme.textSecondary}" stroke-width="1" />
        <line x1="50" y1="132" x2="62" y2="131" stroke="${theme.textSecondary}" stroke-width="1" />
        <!-- Bigotes Derecha -->
        <line x1="90" y1="128" x2="100" y2="126" stroke="${theme.textSecondary}" stroke-width="1" />
        <line x1="90" y1="131" x2="100" y2="132" stroke="${theme.textSecondary}" stroke-width="1" />

        <!-- Laptop y Café alineados frente al gato -->
        <g transform="translate(35, 110)">
          ${laptopAndCoffee.content}
        </g>
      </g>

    </g>
  `;

  return { content, cssStyles };
}