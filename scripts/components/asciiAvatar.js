export function renderAsciiAvatar(x = 40, y = 80, profile, theme) {
  const lineDelay = 0.3; // Tiempo entre líneas
  
  // Generamos el revelado de cada línea del ASCII de Byte
  const asciiLines = profile.asciiByte.map((line, index) => {
    const delay = (index * lineDelay).toFixed(1);
    return `
      <text x="0" y="${index * 26}" class="ascii-line" style="animation-delay: ${delay}s;">
        ${line.replace(/ /g, "&#160;")}
      </text>
    `;
  }).join("");

  const cssStyles = `
    @keyframes floatAscii {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    
    @keyframes revealLine {
      from { opacity: 0; transform: translateX(-10px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes scanlineSweep {
      0% { transform: translateY(0px); opacity: 0.2; }
      50% { opacity: 0.8; }
      100% { transform: translateY(320px); opacity: 0.2; }
    }

    @keyframes gradientShift {
      0% { stop-color: ${theme.gradStart}; }
      50% { stop-color: ${theme.gradMid}; }
      100% { stop-color: ${theme.gradStart}; }
    }

    .ascii-container {
      animation: floatAscii 6s ease-in-out infinite;
    }

    .ascii-line {
      font-family: 'Fira Code', Consolas, Monaco, monospace;
      font-size: 22px;
      font-weight: bold;
      fill: url(#${theme.asciiGradientId});
      opacity: 0;
      animation: revealLine 0.5s forwards ease-out;
    }

    .scanline {
      width: 380px;
      height: 2px;
      fill: ${theme.gradMid};
      opacity: 0.3;
      filter: blur(1px);
      animation: scanlineSweep 4s linear infinite;
    }
  `;

  const content = `
    <g transform="translate(${x}, ${y})" class="ascii-container">
      <!-- Gradiente animado para el ASCII -->
      <defs>
        <linearGradient id="${theme.asciiGradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.gradStart}">
            <animate attributeName="stop-color" values="${theme.gradStart}; ${theme.gradMid}; ${theme.gradEnd}; ${theme.gradStart}" dur="8s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stop-color="${theme.gradMid}">
            <animate attributeName="stop-color" values="${theme.gradMid}; ${theme.gradEnd}; ${theme.gradStart}; ${theme.gradMid}" dur="8s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>

      <!-- Panel Glass del ASCII (Lado Izquierdo) -->
      <rect width="380" height="470" rx="16" fill="${theme.panelBg}" fill-opacity="0.6" stroke="${theme.borderColor}" stroke-width="1" />
      
      <!-- Scanline Sweeper -->
      <rect class="scanline" x="0" y="20" />

      <!-- Renderizado ASCII de Byte -->
      <g transform="translate(60, 150)">
        ${asciiLines}
      </g>

      <!-- Subtítulo de Byte -->
      <text x="190" y="380" text-anchor="middle" font-family="'Fira Code', monospace" font-size="12" fill="${theme.textMuted}">
        [ Byte Cyber-Mascot v2.0 ]
      </text>
    </g>
  `;

  return { content, cssStyles };
}