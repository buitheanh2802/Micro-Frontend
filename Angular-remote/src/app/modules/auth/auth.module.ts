import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routings.module";
import { LoginComponent } from "./pages/login.component";
import { AuthLayoutComponent } from "src/app/shareds/layouts/auth/auth.component";



@NgModule({
    declarations: [
        LoginComponent,
        AuthLayoutComponent
    ],
    imports: [
        AuthRoutingModule
    ],
    exports: [
        
    ]
})
export class AuthModule {}