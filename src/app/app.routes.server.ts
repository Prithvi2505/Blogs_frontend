import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blogs',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blogs/me',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blogs/create',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blogs/:id',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blogs/:id/edit',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
