/* eslint-disable prettier/prettier */
import { Controller , Get, Post , Body, Logger, Param, ParseIntPipe, Put, Delete} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.interface";

@Controller('todo')
export class TodoController {
  private readonly logger = new Logger(TodoController.name)
  constructor(private readonly todoService: TodoService){

  }
  @Get(':id')
  findOne(@Param("id", ParseIntPipe) id: number): Todo{
   this.logger.log("Handling findOne request with id = " + id + " ...");
   return this.todoService.findOne(id); 
  }

  @Post()
  create(@Body() todo: Todo): void {
    this.logger.log("Handling create () request ...."); 
   return this.todoService.create(todo);
  }

  @Get()
  findAll(): Todo[]{
  this.logger.log("Handling findAll() request ...."); 
   return this.todoService.findAll();
  }
  
  @Put(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() todo:Todo): void {
    this.logger.log("Handling update() request with id =" + id + "....");
    return this.todoService.update(id, todo);
  }
  @Delete(':id')
  delete(@Param("id", ParseIntPipe) id: number) {
    this.logger.log("Handling delete() request with id =" + id + "....");
    return this.todoService.remove(id);
  }
}