import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Note} from "../../shared/note.model";
import {NoteService} from "../note.service";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  id!: number;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private noteService: NoteService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newNote = new Note(value.title, value.title, value.note);
    this.noteService.addNote(newNote);
  }
}
