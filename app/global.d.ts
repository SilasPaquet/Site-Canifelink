export {};

declare global {
  interface Window {
    toggleFaq?: (btn: HTMLElement) => void;
  }
}