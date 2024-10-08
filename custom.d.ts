declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.module.css"

interface Window {
  DISQUS: {
    reset: () => void
  }
}
