import { Component, OnInit } from '@angular/core';
import {Tag} from "../../shared/tag.model";

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {
  tags: Tag[] = [
    new Tag('id', 'tag1'),
    new Tag('id', 'tag2'),
    new Tag('id', 'tag3')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
