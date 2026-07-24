export function renderTerminal({ x = 30, y = 30, width = 460, height = 280 }, theme, profile) {
  const cssStyles = `
    .term-header { fill: ${theme.borderColor}; opacity: 0.4; }
    .btn-close { fill: #ff5f56; }
    .btn-min { fill: #ffbd2e; }
    .btn-max { fill: #27c93f; }
    .term-title { fill: ${theme.textSecondary}; font-family: monospace; font-size: 11px; }
    .term-text { font-family: 'Fira Code', Consolas, Monaco, monospace; font-size: 13px; }
    .term-prompt { fill: ${theme.accent}; font-weight: bold; }
    .term-cmd { fill: ${theme.textPrimary}; }
    .term-output { fill: ${theme.codeGreen}; }
    .term-dim { fill: ${theme.textSecondary}; opacity: 0.8; }
    
    @keyframes blinkCursor {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .cursor { fill: ${theme.accent}; animation: blinkCursor 1s infinite; }
  `;

  const content = `
    <!-- Terminal Box -->
    <g transform="translate(${x}, ${y})">
      <rect width="${width}" height="${height}" rx="10" fill="${theme.terminalBg}" stroke="${theme.borderColor}" stroke-width="1" />
      
      <!-- Terminal Header -->
      <path d="M 0 10 Q 0 0 10 0 L ${width - 10} 0 Q ${width} 0 ${width} 10 L ${width} 30 L 0 30 Z" class="term-header" />
      <circle cx="18" cy="15" r="5" class="btn-close" />
      <circle cx="34" cy="15" r="5" class="btn-min" />
      <circle cx="50" cy="15" r="5" class="btn-max" />
      <text x="${width / 2}" y="19" text-anchor="middle" class="term-title">bash - ${profile.username}@gitprofile-studio</text>

      <!-- Terminal Lines -->
      <g transform="translate(18, 55)" class="term-text">
        <!-- Line 1: Command -->
        <text y="0">
          <tspan class="term-prompt">❯ </tspan>
          <tspan class="term-cmd">whoami</tspan>
        </text>
        <!-- Line 2: Output -->
        <text y="22" class="term-output">✨ ${profile.name}</text>

        <!-- Line 3: Command -->
        <text y="50">
          <tspan class="term-prompt">❯ </tspan>
          <tspan class="term-cmd">git status</tspan>
        </text>
        <text y="72" class="term-dim">On branch main</text>
        <text y="92" class="term-dim">Your branch is up to date with 'origin/main'.</text>
        <text y="112" class="term-output">Status: Building awesome software 🚀</text>

        <!-- Line 4: Active prompt -->
        <text y="142">
          <tspan class="term-prompt">❯ </tspan>
          <tspan class="term-cmd">cat role.txt</tspan>
        </text>
        <text y="164" class="term-dim">${profile.role}</text>
        
        <text y="194">
          <tspan class="term-prompt">❯ </tspan>
          <rect x="18" y="182" width="7" height="13" class="cursor" />
        </text>
      </g>
    </g>
  `;

  return { content, cssStyles };
}