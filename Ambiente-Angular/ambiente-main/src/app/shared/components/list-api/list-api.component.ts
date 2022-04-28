import { Component, OnInit } from '@angular/core';
import { ApiResponse, ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  charData: Array<any> = [];

  constructor(private listService: ListService) { };

  ngOnInit(): void {
    this.getList();
  };

  getList(){
    this.listService.getlist().subscribe(result => {
      this.charData = result?.results;
    })
  }

}
