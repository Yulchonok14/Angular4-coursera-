import {Injectable} from '@angular/core';
import {Dish} from '../../shared/dish';
import {Http, Response} from '@angular/http';
import {baseURL} from '../../shared/baseurl';
import {ProcessHTTPMsgService} from '../process-httpmsg/process-httpmsg.service';
import {RestangularModule, Restangular} from 'ngx-restangular';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular, private processHTTPMsgService: ProcessHTTPMsgService) {
  }

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return  this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id))
      .catch(error => error);
  }

}
