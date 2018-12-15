import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body-app/body.component';
import { RoutingAppMainModule } from './app-main-routing.module';
import { MenuFbmComponent } from './header-app/menu/menu-fbm-component';
import { OperationsFinancialAccountComponent } from './nev-app/operations-financial-account/operations-financial-account.component';
import { TrafficInInstallmentsComponent } from './section-app/operations-financial-account-section/traffic-in-installments/traffic-in-installments.component';
import { NavNextTabTestBComponent } from './nev-app/nav-next-tab-test-b/nav-next-tab-test-b.component';
import { NavNextTabTestCComponent } from './nev-app/nav-next-tab-test-c/nav-next-tab-test-c.component';
import { NavNextTabTestDComponent } from './nev-app/nav-next-tab-test-d/nav-next-tab-test-d.component';
import { NavNextTabTestFComponent } from './nev-app/nav-next-tab-test-f/nav-next-tab-test-f.component';
import { NavNextTabTestEComponent } from './nev-app/nav-next-tab-test-e/nav-next-tab-test-e.component';
import { OperationsFinancialAccountSectionTestAComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-a/operations-financial-account-section-test-a.component';
import { OperationsFinancialAccountSectionTestCComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-c/operations-financial-account-section-test-c.component';
import { OperationsFinancialAccountSectionTestDComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-d/operations-financial-account-section-test-d.component';
import { OperationsFinancialAccountSectionTestEComponent } from './section-app/operations-financial-account-section/operations-financial-account-section-test-e/operations-financial-account-section-test-e.component';

@NgModule({
  declarations: [
    BodyComponent,
    MenuFbmComponent,
    OperationsFinancialAccountComponent,
    TrafficInInstallmentsComponent,
    NavNextTabTestBComponent,
    NavNextTabTestCComponent,
    NavNextTabTestDComponent,
    NavNextTabTestFComponent,
    NavNextTabTestEComponent,
    OperationsFinancialAccountSectionTestAComponent,
    OperationsFinancialAccountSectionTestCComponent,
    OperationsFinancialAccountSectionTestDComponent,
    OperationsFinancialAccountSectionTestEComponent],
  imports: [
    CommonModule,
    RoutingAppMainModule
  ],
  exports:[
    BodyComponent,
    MenuFbmComponent,
    OperationsFinancialAccountComponent,
    TrafficInInstallmentsComponent]
})
export class MainAppModule { }
