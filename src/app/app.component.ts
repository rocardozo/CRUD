import { Component } from '@angular/core';

/**Servicios */
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpClient2';
  
  constructor( private taskService: TaskService) {
    
  }

  getTareas() {
    this.taskService.getAllTask().subscribe(tareas => {
      console.log(tareas);
    });
  }

  getTarea() {
    this.taskService.getTask('1').subscribe(tarea => {
      console.log(tarea);
    });
  }

  postTarea() {
    const tarea = {
      userId: '1',
      title: 'nuevo titulo',
      completed: true
    };

    this.taskService.postTask(tarea).subscribe( respuesta => {
      console.log(respuesta);
    });
  }

  putTarea() {
    const tarea = {
      id: '200',
      userId: '1',
      title:  'titulo editado',
      completed: false
    };
    
    this.taskService.putTask( tarea ).subscribe(respuesta => {
      console.log(respuesta);
    });
  }

  deleteTarea() {
    this.taskService.deleteTask( '200' ).subscribe(respuesta => {
      console.log(respuesta);
    });
  }


}
