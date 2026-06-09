import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Articles } from '../features/articles/articles';
import { About } from '../features/about/about';
import { Contact } from '../features/contact/contact';
import { ArticleDetailed } from '../features/article-detailed/article-detailed';
import { authGuard } from '../core/guards/auth-guard';
import { TestErrors } from '../features/test-errors/test-errors';
import { ServerError } from '../shared/errors/server-error/server-error';
import { NotFound } from '../shared/errors/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'articles', component: Articles },
            { path: 'artiles/:id', component: ArticleDetailed },
        ]
    },
    {path: 'errors', component: TestErrors},
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'errors', component: TestErrors},
    {path: 'server-error', component: ServerError },
    { path: '**', component: NotFound }
];
