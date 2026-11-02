import { parseRoute, normalizePath } from './router';

/**
 * Starts downloading the page chunk for the current URL while boot is still running, so the first
 * render does not wait for a second round trip. Importing the same module again later is free.
 */
export function preloadRoute(pathname: string): void {
  const route = parseRoute(normalizePath(pathname));
  switch (route.name) {
    case 'home':
      void import('./pages/Home');
      break;
    case 'hub':
      void import('./pages/ModuleHub');
      break;
    case 'module':
    case 'lesson':
    case 'quiz':
    case 'challenge':
      void (route.id === 'foundations' ? import('./modules/ModuleA/ModuleA') : route.id === 'synthesis' ? import('./modules/ModuleB/ModuleB') : import('./modules/ModuleC/ModuleC'));
      break;
    case 'progress':
      void import('./pages/ProgressDashboard');
      break;
    case 'achievements':
      void import('./pages/Achievements');
      break;
    case 'glossary':
      void import('./pages/Glossary');
      break;
    case 'about':
      void import('./pages/About');
      break;
    case 'accessibility':
      void import('./pages/Accessibility');
      break;
    case 'credits':
      void import('./pages/Credits');
      break;
    case 'notfound':
      break;
  }
}
