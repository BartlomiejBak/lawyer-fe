import { Component, OnInit } from '@angular/core';
import {Note} from "../../shared/note.model";
import {NoteService} from "../note.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

  onNewNote() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
