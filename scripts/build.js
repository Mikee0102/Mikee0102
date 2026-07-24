import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { profile } from "../config/profile.js";
import { themes } from "../config/theme.js";
import { createSvgDocument } from "./utils/svg.js";
import { generateBannerLayout } from "./layouts/banner.js";

// Obtener el directorio raíz del proyecto usando ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Asegurar que existan las carpetas de salida
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const build = () => {
  console.log("🚀 Iniciando GitProfile Studio Build v2.0...");

  const outputDir = path.join(rootDir, "output");
  const assetsDir = path.join(rootDir, "assets", "banner");

  ensureDir(outputDir);
  ensureDir(assetsDir);

  ["dark", "light"].forEach((themeName) => {
    const theme = themes[themeName];
    
    // Generamos el contenido del layout
    const { content, cssStyles } = generateBannerLayout(theme, profile);

    // Creamos el documento SVG con el Easter Egg de Byte y resolución 1180x610
    const svgContent = createSvgDocument({
      width: 1180,
      height: 610,
      content,
      cssStyles,
      easterEgg: profile.easterEgg
    });

    // Rutas absolutas para guardar los SVGs
    const outputPath = path.join(outputDir, `${themeName}.svg`);
    const assetsPath = path.join(assetsDir, `${themeName}.svg`);

    fs.writeFileSync(outputPath, svgContent, "utf-8");
    fs.writeFileSync(assetsPath, svgContent, "utf-8");

    console.log(`✅ Banner ${themeName.toUpperCase()} (1180x610) generado correctamente.`);
  });

  console.log("🎉 Build completado con éxito.");
};

build();