import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import { CoursesMSG } from 'src/common/constants';
import { ClientProxyApp } from 'src/common/proxy/client-proxy';
import {CreateCourseDto, RateDto, UpdateCourseDto} from './dto/course.dto';
import { IUser } from 'src/common/interfaces/user.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly clientProxy: ClientProxyApp) {}
  private _clientProxyCourses = this.clientProxy.clientProxyCourses();

  @Post('create')
  async createCourse(@Body() createCourseInput: CreateCourseDto): Promise<any> {
    return await firstValueFrom(
      this._clientProxyCourses.send(CoursesMSG.CREATE, {
        ...createCourseInput,
      }),
    );
  }

  @Get()
  findAll(): Observable<IUser[]> {
    console.log('find all');
    return this._clientProxyCourses.send(CoursesMSG.FIND_ALL, {});
  }

  @Get('find/:id')
  findCourse(@Param('id') id: string): Observable<any> {
    return this._clientProxyCourses.send(CoursesMSG.FIND_ONE, { id });
  }

  @Post('update/:id')
  updateCourse(
    @Param('id') id: string,
    @Body() updateCourseInput: UpdateCourseDto,
  ): Observable<any> {
    return this._clientProxyCourses.send(CoursesMSG.UPDATE, {
      id,
      ...updateCourseInput,
    });
  }

  @Post('delete/:id')
  deleteCourse(@Param() id: string): Observable<any> {
    return this._clientProxyCourses.send(CoursesMSG.DELETE, { id });
  }

  @Get('category/:category')
  findByCategory(@Param('category') category: string): Observable<any> {
    return this._clientProxyCourses.send(CoursesMSG.FIND_BY_CATEGORY, category);
  }

  @Post(':id/rate')
  rateCourse(
      @Param('id') id: string,
      @Body() rateDto: RateDto,
  ): Observable<any> {
    return this._clientProxyCourses.send(CoursesMSG.RATE_COURSE, {
      id,
      rating: rateDto.rating,
    });
  }
}
