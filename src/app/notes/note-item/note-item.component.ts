import { Component, OnInit } from '@angular/core';
import {Note} from "../../shared/note.model";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  note: Note = new Note('id', 'first note', 'something....');

  constructor() { }

  ngOnInit(): void {
  }

}
