import { Injectable } from '@angular/core';
import {Tag} from "../shared/tag.model";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private tags: Tag[] = [
    new Tag('id', 'tag1'),
    new Tag('id', 'tag2'),
    new Tag('id', 'tag3')
  ];

  constructor() { }

  getTags() {
    return this.tags.slice();
  }

  getTag(id: string): Tag {
    return this.tags.find(e => e.tagId === id)!;
  }
}
