export function renderTerminalV2(x = 440, y = 80, profile, theme) {
  // Generar Pills de Skills con efecto Hover / Glow
  let currentSkillX = 0;
  let currentSkillY = 0;
  
  const skillPills = profile.skills.map((skill) => {
    const width = skill.length * 9 + 24;
    if (currentSkillX + width > 640) {
      currentSkillX = 0;
      currentSkillY += 36;
    }
    const itemX = currentSkillX;
    currentSkillX += width + 10;

    return `
      <g transform="translate(${itemX}, ${currentSkillY})" class="skill-pill">
        <rect width="${width}" height="28" rx="14" class="pill-bg" />
        <text x="${width / 2}" y="18" text-anchor="middle" class="pill-text">${skill}</text>
      </g>
    `;
  }).join("");

  const cssStyles = `
    @keyframes typingText {
      0%, 20% { width: 0; }
      50%, 80% { width: 100%; }
      100% { width: 0; }
    }

    @keyframes blink {
      50% { opacity: 0; }
    }

    .term-title {
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 32px;
      font-weight: 800;
      fill: ${theme.textPrimary};
    }

    .term-sub {
      font-family: 'Fira Code', monospace;
      font-size: 18px;
      font-weight: 600;
      fill: ${theme.gradMid};
    }

    .info-label {
      font-family: system-ui, sans-serif;
      font-size: 13px;
      font-weight: 600;
      fill: ${theme.textMuted};
    }

    .info-val {
      font-family: system-ui, sans-serif;
      font-size: 13px;
      font-weight: 500;
      fill: ${theme.textPrimary};
    }

    .pill-bg {
      fill: ${theme.panelBg};
      stroke: ${theme.borderColor};
      stroke-width: 1px;
      transition: all 0.3s ease;
    }

    .pill-text {
      font-family: system-ui, sans-serif;
      font-size: 12px;
      font-weight: 600;
      fill: ${theme.textPrimary};
    }

    .cursor-blink {
      fill: ${theme.gradMid};
      animation: blink 0.8s infinite;
    }
  `;

  const content = `
    <g transform="translate(${x}, ${y})">
      <!-- Panel Glass Derecho -->
      <rect width="700" height="470" rx="16" fill="${theme.panelBg}" fill-opacity="0.6" stroke="${theme.borderColor}" stroke-width="1" />

      <g transform="translate(40, 45)">
        <!-- Greeting -->
        <text y="0" class="term-title">Hola 👋, soy ${profile.name.split(" ")[0]}</text>
        
        <!-- Animated Role Typing -->
        <g transform="translate(0, 35)">
          <text y="0" class="term-sub">❯ ${profile.roles[0]}</text>
          <rect x="230" y="-14" width="8" height="18" class="cursor-blink" />
        </g>

        <!-- Information List -->
        <g transform="translate(0, 80)">
          <text y="0">
            <tspan class="info-label">📍 Ubicación: </tspan>
            <tspan class="info-val">${profile.location}</tspan>
          </text>
          <text y="28">
            <tspan class="info-label">🎓 Formación: </tspan>
            <tspan class="info-val">${profile.education}</tspan>
          </text>
          <text y="56">
            <tspan class="info-label">🎯 Enfoque Actual: </tspan>
            <tspan class="info-val">${profile.focus}</tspan>
          </text>
        </g>

        <!-- Tech Stack Section -->
        <g transform="translate(0, 200)">
          <text y="-12" class="info-label" style="letter-spacing: 1px;">TECNOLOGÍAS &amp; STACK</text>
          <g transform="translate(0, 10)">
            ${skillPills}
          </g>
        </g>

        <!-- Social Icons Bottom -->
        <g transform="translate(0, 350)">
          <text y="0" class="info-val" opacity="0.8">🔗 github.com/${profile.username}</text>
        </g>
      </g>
    </g>
  `;

  return { content, cssStyles };
}