import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientList: any =[];
  constructor(private metaService: Meta, private titleService: Title, private dataService: DataService) {
    metaService.addTags([
      { name: 'author', content: 'angular7universal'}
    ]);
    titleService.setTitle("Angular 7 Server side rendering using Universal");
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.dataService.getUsersData().subscribe(data => {
      if(data){
        this.clientList = data;
      }
    })
  }

}
