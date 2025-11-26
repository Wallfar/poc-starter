# POC Starter

A straightforward starter template for building Proof of Concepts (POCs) quickly. We've set up the essentials so you can focus on your idea.

## Features

- **Nuxt 4** & **Tailwind CSS 4**
- **Lucide**: A library of beautiful icons.
- **[shadcn-vue](https://www.shadcn-vue.com/)**: Ready to use. You can easily install components from their documentation directly into your project.
- **Tweakpane**: Easy fine-tune parameters and debug your experiments.

## Quick Start

1. **Install dependencies**
   ```bash
   pnpm i
   ```

2. **Start the development server**
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:3000`.

3. **Start coding**

   Create a new file in `app/pages/pocs/` (e.g. `app/pages/pocs/my-new-idea.vue`). It will automatically appear in the navigation menu. We've included `app/pages/pocs/my-first-poc.vue` as an example to get you started.

## Using the Config Pane

We've included a helper composable `usePane` to easily create a configuration pane for your POC parameters.

```ts
const params = usePane({
  // Simple value
  color: '#ff0000',
  
  // Value with options
  size: {
    default: 10,
    min: 0,
    max: 100,
    step: 1,
  }
})
```

The `params` object is reactive, so you can use it directly in your template:

```vue
<div :style="{ color: params.color, fontSize: `${params.size}px` }">
  Hello World
</div>
```

---

### Powered by [oneclick.dev](https://oneclick.dev)

We create specialized software for developers. Check us out!
