import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SignInComponent } from "../sign-in/sign-in.component";

const routes: Routes = [
  {
    path: "sign-in",
    component: SignInComponent
  },
  {path:"sign-up"}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
