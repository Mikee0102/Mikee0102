import fs from "fs";
import path from "path";
import { profile } from "../config/profile.js";
import { themes } from "../config/theme.js";
import { createSvgDocument } from "./utils/svg.js";
import { generateBannerLayout } from "./layouts/banner.js";

// Asegurar que existan las carpetas de salida
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const build = () => {
  console.log("🚀 Iniciando GitProfile Studio Build...");

  ensureDir("./output");
  ensureDir("./assets/banner");

  ["dark", "light"].forEach((themeName) => {
    const theme = themes[themeName];
    
    // Generamos el contenido del layout
    const { content, cssStyles } = generateBannerLayout(theme, profile);

    // Creamos el documento SVG con el Easter Egg de Byte
    const svgContent = createSvgDocument({
      width: 850,
      height: 340,
      content,
      cssStyles,
      easterEgg: profile.easterEgg
    });

    // Guardamos las salidas
    fs.writeFileSync(`./output/${themeName}.svg`, svgContent);
    fs.writeFileSync(`./assets/banner/${themeName}.svg`, svgContent);

    console.log(`✅ Banner ${themeName.toUpperCase()} generado correctamente.`);
  });

  console.log("🎉 Build completado con éxito.");
};

build();