import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './callback.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'deals',
      pathMatch: 'full'
    },
    {
      path: 'deals',
      component: PublicDealsComponent
    },
    {
      path: 'special',
      component: PrivateDealsComponent,
      // Add this to guard this route
      canActivate: [
        AuthGuard
      ]
    },
    {
      path: 'callback',
      component: CallbackComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
