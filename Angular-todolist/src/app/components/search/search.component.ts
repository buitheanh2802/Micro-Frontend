import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";


@Component({
    templateUrl: './search.component.html',
    // styleUrl: './search.component.scss',
    selector: 'search-item',
    imports: [
        InputTextModule
    ],
    standalone: true
})
export class SearchItemComponent {
    
}