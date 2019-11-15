import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private endPoint = 'https://jsonplaceholder.typicode.com/todos/';

  constructor( private http: HttpClient) {

  }

  /**Obtengo todas las tareas en un array de objetos de tipo Task */
  getAllTask() {
    return this.http.get<Task[]>(this.endPoint);
  }

  /**Obtengo una sola tarea */
  getTask( id: string ) {
    return this.http.get<Task>(this.endPoint + id);
  }

  /**Creo una nueva tarea */
  postTask( tarea: Task ) {
    return this.http.post(this.endPoint, tarea);
  }

  /**Edito una tarea por su id */
  putTask( tarea: Task ) {
    return this.http.put( this.endPoint + `${tarea.id}`, tarea);
  }

  /**Elimino una tarea por su id */
  deleteTask( id: string ) {
    return this.http.delete(this.endPoint + id);
  }

}
