import {Component, OnInit} from '@angular/core';
import {Task} from "../../shared/task.model";
import {TaskService} from "../task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onNewTask() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
