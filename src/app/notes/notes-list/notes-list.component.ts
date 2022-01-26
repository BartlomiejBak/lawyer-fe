import { Component, OnInit } from '@angular/core';
import {Note} from "../../shared/note.model";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [
    new Note('1', 'title 1', 'text 1'),
    new Note('2', 'title 2', 'text 2'),
    new Note('3', 'title 3', 'text 3'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
