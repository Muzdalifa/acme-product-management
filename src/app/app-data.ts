import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from './products/product';
import { ProductData } from './products/product-data';

export class AppData implements InMemoryDbService{

    createDb():{ products:Product[], reviews:Review[]} {
        const products = ProductData.products;
        const reviews = ReviewData.reviews;
        return { products, reviews };
    }
}