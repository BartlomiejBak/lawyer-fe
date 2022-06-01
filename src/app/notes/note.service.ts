import { Injectable } from '@angular/core';
import {Note} from "../shared/note.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesChanged = new Subject<Note[]>();
  private notes: Note[] = [
    new Note('1', 'title 1', 'text 1'),
    new Note('2', 'title 2', 'text 2'),
    new Note('3', 'title 3', 'text 3'),
  ];

  constructor() { }

  getNotes() {
    return this.notes.slice();
  }

  getNote(id: string): Note {
    return this.notes.find(e => e.noteId === id)!;
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notesChanged.next(this.notes.slice());
    console.log("dodano notkę " + this.notes.length);
  }
}
