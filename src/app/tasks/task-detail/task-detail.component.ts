import {Component, OnInit} from '@angular/core';
import {Task} from "../../shared/task.model";
import {TaskService} from "../task.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task!: Task;
  id!: string;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.task = this.taskService.getTask(this.id);
        }
      )
  }

}
