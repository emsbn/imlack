import { Injectable } from '@nestjs/common';

// req, res에 대해서는 모름
@Injectable()
export class AppService {
  async getHello() {
    return process.env.SECRET;
  }
}
