import { Component, OnInit } from '@angular/core';
import {Note} from "../../shared/note.model";

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: Note = new Note('id', 'first note', 'something....');

  constructor() { }

  ngOnInit(): void {
  }

}
