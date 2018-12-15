import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationsFinancialAccountComponent } from './nev-app/operations-financial-account/operations-financial-account.component';
import { NavNextTabTestBComponent } from './nev-app/nav-next-tab-test-b/nav-next-tab-test-b.component';
import { NavNextTabTestCComponent } from './nev-app/nav-next-tab-test-c/nav-next-tab-test-c.component';
import { NavNextTabTestDComponent } from './nev-app/nav-next-tab-test-d/nav-next-tab-test-d.component';
import { NavNextTabTestEComponent } from './nev-app/nav-next-tab-test-e/nav-next-tab-test-e.component';
import { NavNextTabTestFComponent } from './nev-app/nav-next-tab-test-f/nav-next-tab-test-f.component';
import { TrafficInInstallmentsComponent } from './section-app/operations-financial-account-section/traffic-in-installments/traffic-in-installments.component';
import { OperationsFinancialAccountSectionTestAComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-a/operations-financial-account-section-test-a.component';
import { OperationsFinancialAccountSectionTestCComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-c/operations-financial-account-section-test-c.component';
import { OperationsFinancialAccountSectionTestDComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-d/operations-financial-account-section-test-d.component';
import { OperationsFinancialAccountSectionTestEComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-e/operations-financial-account-section-test-e.component';

const routes: Routes = [
  //next teb 1
  { path: '', redirectTo: '/operationsFinancialAccount', pathMatch: 'full' },

  {
    path: 'operationsFinancialAccount',
    component: OperationsFinancialAccountComponent,
    children: [
     // { path: '', redirectTo: '/countSectionTestA', pathMatch: 'full' },
      { path: 'countSectionTestA', component: OperationsFinancialAccountSectionTestAComponent },
      { path: 'trafficInInstallments', component: TrafficInInstallmentsComponent },
      { path: 'countSectionTestC', component: OperationsFinancialAccountSectionTestCComponent },
      { path: 'countSectionTestD', component: OperationsFinancialAccountSectionTestDComponent },
      { path: 'countSectionTestE', component: OperationsFinancialAccountSectionTestEComponent },
     // { path: '**', component: OperationsFinancialAccountSectionTestAComponent }
    ],
  },
  { path: 'navNextTabTestB', component: NavNextTabTestBComponent },
  { path: 'navNextTabTestC', component: NavNextTabTestCComponent },
  { path: 'navNextTabTestD', component: NavNextTabTestDComponent },
  { path: 'navNextTabTestE', component: NavNextTabTestEComponent },
  { path: 'navNextTabTestF', component: NavNextTabTestFComponent },

  //{ path: '**', component: OperationsFinancialAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingAppMainModule { }
export const MenuRoutingComponents = [routes]