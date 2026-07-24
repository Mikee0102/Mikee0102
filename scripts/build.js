import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { profile } from "../config/profile.js";
import { themes } from "../config/theme.js";
import { createSvgDocument } from "./utils/svg.js";
import { generateBannerLayout } from "./layouts/banner.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const build = () => {
  console.log("🚀 Restaurando GitProfile Studio v1.0 (Byte Sleeping 🐱)...");

  const outputDir = path.join(rootDir, "output");
  const assetsDir = path.join(rootDir, "assets", "banner");

  ensureDir(outputDir);
  ensureDir(assetsDir);

  ["dark", "light"].forEach((themeName) => {
    const theme = themes[themeName];
    
    const { content, cssStyles } = generateBannerLayout(theme, profile);

    const svgContent = createSvgDocument({
      width: 850,
      height: 340,
      content,
      cssStyles,
      easterEgg: profile.easterEgg
    });

    const outputPath = path.join(outputDir, `${themeName}.svg`);
    const assetsPath = path.join(assetsDir, `${themeName}.svg`);

    fs.writeFileSync(outputPath, svgContent, "utf-8");
    fs.writeFileSync(assetsPath, svgContent, "utf-8");

    console.log(`✅ Banner ${themeName.toUpperCase()} (850x340) restaurado.`);
  });

  console.log("🎉 Build completado con éxito.");
};

build();