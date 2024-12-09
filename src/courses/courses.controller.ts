import { Body, Controller, Param, Post } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import { CoursesMSG } from 'src/common/constants';
import { ClientProxyApp } from 'src/common/proxy/client-proxy';
import { CreateCourseDto, UpdateCourseDto } from './dto/course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly clientProxy: ClientProxyApp) {}
  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post('create')
  async createCourse(@Body() createCourseInput: CreateCourseDto): Promise<any> {
    return await firstValueFrom(
      this._clientProxyUser.send(CoursesMSG.CREATE, { ...createCourseInput }),
    );
  }

  @Post('find/:id')
  async findCourse(@Param('id') id: string): Promise<any> {
    return await firstValueFrom(
      this._clientProxyUser.send(CoursesMSG.FIND_ONE, { id }),
    );
  }

  @Post('update/:id')
  async updateCourse(
    @Param('id') id: string,
    @Body() updateCourseInput: UpdateCourseDto,
  ): Promise<any> {
    return await firstValueFrom(
      this._clientProxyUser.send(CoursesMSG.UPDATE, {
        id,
        ...updateCourseInput,
      }),
    );
  }

  @Post('delete/:id')
  async deleteCourse(@Param() id: string): Promise<any> {
    return await firstValueFrom(
      this._clientProxyUser.send(CoursesMSG.DELETE, { id }),
    );
  }
}
