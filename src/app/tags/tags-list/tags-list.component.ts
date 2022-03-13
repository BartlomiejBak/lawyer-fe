import { Component, OnInit } from '@angular/core';
import {Tag} from "../../shared/tag.model";
import {TagService} from "../tag.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private tagService: TagService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tags = this.tagService.getTags();
  }

  onNewTag() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
