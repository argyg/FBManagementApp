import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsFinancialAccountComponent } from 'src/app/fbm-module-app/menu-module/fbm-menu/operations-financial-account/operations-financial-account.component';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { TrafficInInstallmentsComponent } from 'src/app/fbm-module-app/menu-module/fbm-menu/operations-financial-account/nev-path/traffic-in-installments/traffic-in-installments.component';
>>>>>>> parent of 7543c2a...  fix files: set new file header,nav section.... (15.12.18 ~ v 0.0.5)
=======
import { TrafficInInstallmentsComponent } from 'src/app/fbm-module-app/menu-module/fbm-menu/operations-financial-account/nev-path/traffic-in-installments/traffic-in-installments.component';
>>>>>>> parent of 7543c2a...  fix files: set new file header,nav section.... (15.12.18 ~ v 0.0.5)

const routes: Routes = [
  //next teb 1
  { path: '', redirectTo: '/operationsFinancialAccount', pathMatch: 'full' },
  { path: 'operationsFinancialAccount', component: OperationsFinancialAccountComponent },
  ////next teb 1 - > nav 1
  { path: 'trafficInInstallmentsComponent', component: TrafficInInstallmentsComponent },
  //next teb 2
  //{ path: 'trackFinancialAccount', component: TrackFinancialAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const MenuRoutingComponents = [OperationsFinancialAccountComponent,TrafficInInstallmentsComponent]