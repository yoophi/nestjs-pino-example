import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('hello, world');
    this.logger.error({ id: `sample-id` }, `Some Error`); // object passed in first argument
    this.logger.verbose({ foo: 'bar' }, 'baz %s', 'qux');
    this.logger.debug('foo %s %o', 'bar', { baz: 'qux' });
    this.logger.log('foo');

    return 'Hello World!';
  }

  makeError(): any {
    try {
      throw new Error('Some Error');
    } catch (error) {
      this.logger.error(error);
      // throw error;
    }
  }
}
