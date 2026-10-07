import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth-guard';
import { roleGuard } from './core/auth/role-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(c => c.Home)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(c => c.Login)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register')
        .then(c => c.Register)
  },

  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/profile/profile')
        .then(c => c.Profile)
  },

  {
    path: 'blogs',
    loadComponent: () =>
      import('./features/blogs/pages/all-blogs/all-blogs')
        .then(c => c.AllBlogs)
  },
  {
    path: 'blogs/me',
    canActivate: [roleGuard],
    data: { roles: ['author'] },
    loadComponent: () =>
      import('./features/blogs/pages/my-blogs/my-blogs')
        .then(c => c.MyBlogs)
  },
  {
    path: 'blogs/create',
    canActivate: [roleGuard],
    data: { roles: ['author'] },
    loadComponent: () =>
      import('./features/blogs/pages/create-blog/create-blog')
        .then(c => c.CreateBlog)
  },
  {
    path: 'blogs/:id/edit',
    canActivate: [roleGuard],
    data: { roles: ['author'] },
    loadComponent: () =>
      import('./features/blogs/pages/edit-blog/edit-blog')
        .then(c => c.EditBlog)
  },
  {
    path: 'blogs/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/blogs/pages/blog-details/blog-details')
        .then(c => c.BlogDetails)
  },
  {
    path: '**',
    redirectTo: '/blogs'
  }
];