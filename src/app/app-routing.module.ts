import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsFinancialAccountComponent } from './fbm-main/menu/operations-financial-account/operations-financial-account.component';
import { TrackFinancialAccountComponent } from './fbm-main/menu/track-financial-account/track-financial-account.component';
import { TrafficInInstallmentsComponent } from './fbm-main/menu/operations-financial-account/traffic-in-installments/traffic-in-installments.component';
 
const routes: Routes = [
  //next teb 1
  { path: '', redirectTo: '/operationsFinancialAccount', pathMatch: 'full' },
  { path: 'operationsFinancialAccount', component: OperationsFinancialAccountComponent },
  ////next teb 1 - > nav 1
  { path: 'trafficInInstallmentsComponent', component: TrafficInInstallmentsComponent },
  //next teb 2
  { path: 'trackFinancialAccount', component: TrackFinancialAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const MenuRoutingComponents = [OperationsFinancialAccountComponent,TrafficInInstallmentsComponent,TrackFinancialAccountComponent]