import type { VisualEditorComponent } from '@/views/editor/editor.utils';

const modules = import.meta.glob('./*/index.tsx', { eager: true });

const components: Record<string, VisualEditorComponent> = {};

Object.keys(modules).forEach((key: string) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1');
  components[name] = modules[key]?.default || modules[key];
});

console.log(components, 'container-component');
export default components;
