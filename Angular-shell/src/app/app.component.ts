import { AfterViewInit, Compiler, Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef, createNgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { AdminModule } from './modules/admin/admin.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Angular-shell';
  @ViewChild('container',{ read: ViewContainerRef, static: true }) container: ViewContainerRef;
  constructor(
    private cfr: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector
  ){

  }
  ngOnInit(): void {
    this.loadFeatureModules();
  }
  ngAfterViewInit(): void {
    // const component = this.cfr.resolveComponentFactory(ButtonComponent)
    
  }

  private async loadFeatureModules(){
      const { AdminModule } = await import("./modules/admin/admin.module");
      const moduleFactory = await this.compiler.compileModuleAsync(AdminModule);
      const moduleRef = moduleFactory.create(this.injector);
      this.container.createComponent(ButtonComponent,{
        ngModuleRef: moduleRef,
        injector: this.injector
      });
  }


}
