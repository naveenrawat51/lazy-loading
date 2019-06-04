import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.css']
})
export class FullBlogComponent implements OnInit {
  userEmails;
  constructor( private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAllUserEmail().subscribe(data => {
      this.userEmails = data
    })
  }

}
