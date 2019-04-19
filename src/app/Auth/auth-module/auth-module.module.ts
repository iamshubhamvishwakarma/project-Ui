import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from ".././sign-in/sign-in.component";
import { SignUpComponent } from ".././sign-up/sign-up.component";
import { ForgotComponent } from ".././forgot/forgot.component";
import { VerifyComponent } from ".././verify/verify.component";
@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotComponent,
    VerifyComponent
  ],
  imports: [CommonModule]
})
export class AuthModule {}
