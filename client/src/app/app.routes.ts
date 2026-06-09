import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Articles } from '../features/articles/articles';
import { About } from '../features/about/about';
import { Contact } from '../features/contact/contact';
import { ArticleDetailed } from '../features/article-detailed/article-detailed';
import { authGuard } from '../core/guards/auth-guard';

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
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: '**', component: Home }
];
