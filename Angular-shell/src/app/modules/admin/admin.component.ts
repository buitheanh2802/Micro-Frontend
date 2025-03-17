import React, { createElement } from "react";
import { createRoot, Root } from "react-dom/client"
import { Component, ElementRef, Input, NgModule, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'admin-component',
    templateUrl: './admin.component.html',
    // styleUrl: './app.component.scss'
})
export class AdminComponent implements OnInit {
    @Input() component: any;
    @ViewChild('ReactElementRef') ReactElementRef: ElementRef;
    root!: Root;
    protected title: string = 'Reference';
    constructor(private readonly host: ElementRef) {}
    ngAfterViewInit() {
        this.root = createRoot(this.ReactElementRef.nativeElement);
        import("React_remote/Button").then(m => {
            console.log(m.default);
            this.root.render(createElement(m.default as any,{
                title: this.title,
                callbackFunc: (data: string) => {
                    // console.log(data);
                    this.title = data;
                }
            }));
        })
    }
    ngOnInit(): void {
        // console.log('running !');
    }

    protected onUnmountReactComponent(){
        this.root.unmount();
    }

    ngOnDestroy() {
        this.root.unmount()
    }
}