/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import fs from 'fs'; // Import fs module

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const globalsFilePath = join(__dirname, 'src', 'app', 'styles', 'variables.sass');

let prependData = '';

try {
  // Read the content of globals.sass
  const globalsContent = fs.readFileSync(globalsFilePath, 'utf-8');
  prependData = `@import "${globalsFilePath}"\n${globalsContent}`;
} catch (error) {
  console.error(`Error reading ${globalsFilePath}: ${error.message}`);
}

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
    prependData,
  }
};

export default nextConfig;
