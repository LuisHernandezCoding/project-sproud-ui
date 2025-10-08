#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sync as globSync } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
// We'll generate stories into stories/{atoms,molecules,organisms,others}
const storiesRoot = path.resolve(projectRoot, 'stories');

// Ensure top-level stories folder exists
fs.mkdirSync(storiesRoot, { recursive: true });

function pascalCase(name) {
  return name
    // replace separators and uppercase following char
    .replace(/(^.|[-_ ./]+.)/g, s => s.replace(/[-_ ./]+/, '').toUpperCase())
    // strip extension if present
    .replace(/\.[^/.]+$/, '');
}

function storyTemplate(componentImportPath, componentName, titlePath) {
  return `import React from 'react';
import ${componentName} from '${componentImportPath}';

export default {
  title: '${titlePath}/${componentName}',
  component: ${componentName},
  // Automatically infer controls from component props if using Args
};

const Template = (args) => <${componentName} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
`;
}

// Search commonly used component folders under projectRoot
const globs = [
  path.join(projectRoot, '..', 'atoms/**/*.tsx'),
  path.join(projectRoot, '..', 'molecules/**/*.tsx'),
  path.join(projectRoot, '..', 'organisms/**/*.tsx'),
  path.join(projectRoot, '..', '**/*.tsx'),
];

const files = new Set();
globs.forEach(g => {
  globSync(g, { nodir: true, ignore: ['**/*.d.ts', '**/*.test.tsx', '**/*.stories.*'] }).forEach(f => files.add(f));
});

if (files.size === 0) {
  console.log('No component files found for generation.');
  process.exit(0);
}

for (const filePath of files) {
  // Skip files outside the ui/src area or non-components
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) continue;

  // Derive location relative to the package root (web/src/ui)
  const rel = path.relative(path.resolve(projectRoot, '..'), filePath).replace(/\\/g, '/');

  // Determine category based on path segments (atoms/molecules/organisms)
  const parts = rel.split('/');
  let category = 'others';
  if (parts.includes('atoms')) category = 'atoms';
  else if (parts.includes('molecules')) category = 'molecules';
  else if (parts.includes('organisms')) category = 'organisms';

  // Derive component name: if file is index.tsx, use parent folder name
  const baseName = path.basename(filePath, path.extname(filePath));
  let compName = baseName === 'index' || baseName === 'index.tsx' || baseName === 'index.jsx'
    ? pascalCase(path.basename(path.dirname(filePath)))
    : pascalCase(baseName);

  // Create the output directory for the category
  const outDir = path.join(storiesRoot, category);
  fs.mkdirSync(outDir, { recursive: true });

  // Create an import path relative to the generated story file
  const importPath = path.relative(outDir, filePath).replace(/\\/g, '/');
  const importPathNormalized = importPath.startsWith('.') ? importPath : `./${importPath}`;

  // Compose title path for Storybook grouping
  const titlePath = `Generated/${category.charAt(0).toUpperCase() + category.slice(1)}`;

  const storyFileName = `${compName}.stories.tsx`;
  const storyFilePath = path.join(outDir, storyFileName);

  const content = storyTemplate(importPathNormalized, compName, titlePath);
  try {
    fs.writeFileSync(storyFilePath, content, 'utf8');
    console.log('Wrote', storyFilePath);
  } catch (err) {
    console.error('Failed to write', storyFilePath, err.message);
  }
}

console.log('Generated stories for', files.size, 'components into', storiesRoot);
process.exit(0);
