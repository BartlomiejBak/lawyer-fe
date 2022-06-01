import { Component, OnInit } from '@angular/core';
import {Note} from "../../shared/note.model";
import {NoteService} from "../note.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];
  private notesChangeSubscription!: Subscription;

  constructor(private noteService: NoteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
    this.notesChangeSubscription = this.noteService.notesChanged
      .subscribe(
        (notes: Note[]) => {
          this.notes = notes;
        }
      )
  }

  onNewNote() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
