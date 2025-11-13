import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
   getHello(): string {
      return "Hello Nam ki ki, tao la ba ki ki, trung ki ki, aaaa";
   }
}
