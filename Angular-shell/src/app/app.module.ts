import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NzButtonModule } from "ng-zorro-antd/button";

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      NzButtonModule
    ],
    providers: [],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {}