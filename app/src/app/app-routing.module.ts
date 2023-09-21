import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Approach taken : lazy loading in order to handle future enhancements if any.
const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () =>
      import('./components/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'user-details',
    loadChildren: () =>
      import('./components/user-details/user-details.module').then(
        (m) => m.UserDetailsModule
      ),
  },
  {path: '', redirectTo: 'registration', pathMatch: 'full'},
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
