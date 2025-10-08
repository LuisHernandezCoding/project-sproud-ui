# @projectsproud/ui

A minimal npm library for reusable UI components built with React + Tailwind CSS.

## Installation

```bash
npm install @projectsproud/ui
# or
yarn add @projectsproud/ui
# or
pnpm add @projectsproud/ui
```

## Usage

Import the CSS styles and components in your application:

```jsx
import React from 'react';
import { Button, Card, Input, Badge, Modal, Navbar } from '@projectsproud/ui';

function App() {
  return (
    <div className="p-4">
      <Card>
        <h2 className="text-xl font-bold mb-4">Welcome to Project Sproud UI</h2>
        <div className="space-y-4">
          <Input placeholder="Enter your name" />
          <div className="flex gap-2">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
          <Badge variant="success">Success Badge</Badge>
        </div>
      </Card>
    </div>
  );
}

export default App;
```

## Components

### Atoms

#### Button
```jsx
<Button variant="primary" size="md" loading={false}>
  Click me
</Button>
```

Props:
- `variant`: "primary" | "secondary" | "ghost" | "destructive"
- `size`: "sm" | "md" | "lg"
- `loading`: boolean
- Standard HTML button props

#### Input
```jsx
<Input 
  placeholder="Enter text" 
  error={false} 
  variant="default" 
/>
```

Props:
- `error`: boolean
- `variant`: "default" | "dark"
- Standard HTML input props

#### Badge
```jsx
<Badge variant="success">Status</Badge>
```

Props:
- `variant`: "default" | "success" | "danger" | "warning" | "muted"

#### Card
```jsx
<Card padding={true} shadow={true}>
  <p>Card content</p>
</Card>
```

Props:
- `padding`: boolean (default: true)
- `shadow`: boolean (default: true)

### Molecules

#### Modal
```jsx
<Modal 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  showCloseButton={true}
>
  <p>Modal content</p>
</Modal>
```

Props:
- `open`: boolean
- `onClose`: () => void
- `title`: React.ReactNode (optional)
- `showCloseButton`: boolean (default: true)

### Organisms

#### Navbar
```jsx
<Navbar 
  brand={<Logo />}
  position="sticky"
>
  <Button variant="ghost">Login</Button>
</Navbar>
```

Props:
- `brand`: React.ReactNode (optional)
- `position`: "fixed" | "sticky" | "relative" (default: "relative")

## Architecture

This library follows atomic design principles:

- `atoms/` — tiny, presentational building blocks (Button, Input, Badge, Card)
- `molecules/` — composed components that combine atoms with labels, helpers, and behaviour (Modal, FormField, etc.)
- `organisms/` — larger sections that compose molecules and atoms into UX patterns (Navbar, Header, Footer)

## Styling

This library uses Tailwind CSS. Make sure you have Tailwind CSS configured in your project, or include the CSS file directly:

```jsx
// Import the CSS file
import '@projectsproud/ui/dist/index.css';
```

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build

# Build with Vite (alternative)
pnpm run build:vite

# Run Storybook
pnpm run storybook

# Generate Storybook stories
pnpm run generate-stories
```

## Build Outputs

The library provides multiple build formats:

- **ESM**: `dist/index.mjs` - ES modules for modern bundlers
- **CommonJS**: `dist/index.js` - For Node.js and older bundlers
- **TypeScript**: `dist/index.d.ts` - Type definitions
- **CSS**: `dist/index.css` - Compiled Tailwind styles

## TypeScript

This library is fully typed and includes TypeScript definitions.

## Publishing

- Update `package.json` fields (author, repository, version) before publishing to npm or GitHub Packages.
- The package has `react` and `react-dom` as peerDependencies; consumers must provide them.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
