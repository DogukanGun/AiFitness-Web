import { NgModule } from '@angular/core';
import { ProfileResolver } from './pages/profile/profile-resolver.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ErrorComponent } from './shared/error/error.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutsModule } from './layouts/layouts.module';
const routes: Routes =
  [
    {
      path: '',
      component: DefaultLayoutComponent,
      children: [
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
        },
        {
          path: 'profile',
          component: ProfileComponent,
          pathMatch: 'full',
          resolve: {
            preloadData: ProfileResolver
          }
        },


        {
          path: '**',
          redirectTo: '404'
        }
      ]
    },
    {
      path: '404',
      component: NotFoundComponent,
      pathMatch: 'full'
    },
    {
      path: '500',
      component: ErrorComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '404'
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
      LayoutsModule
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
