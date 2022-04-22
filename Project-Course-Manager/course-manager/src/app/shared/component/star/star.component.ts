import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges{
    
    @Input()
    rating: number = 0;

    starWidth: number = 0;
  
    /*
    constructor(rating: number, starWidth: number){
        this.rating = rating
        this.starWidth = starWidth
    };
    */

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    };
    

    
};