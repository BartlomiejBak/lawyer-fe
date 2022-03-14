import { Component, OnInit } from '@angular/core';
import {Note} from "../../shared/note.model";
import {NoteService} from "../note.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note!: Note;
  id!: string;

  constructor(private noteService: NoteService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.note = this.noteService.getNote(this.id);
        }
      )
  }

}
