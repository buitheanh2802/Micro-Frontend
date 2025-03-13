import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routings.module";
import { LoginComponent } from "./pages/login.component";
import { AuthLayoutComponent } from "src/app/shareds/layouts/auth/auth.component";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule  } from "ng-zorro-antd/icon";



@NgModule({
    declarations: [
        LoginComponent,
        AuthLayoutComponent
    ],
    imports: [
        AuthRoutingModule,
        NzInputModule,
        NzButtonModule,
        NzIconModule
    ],
    exports: [
        
    ]
})
export class AuthModule {}