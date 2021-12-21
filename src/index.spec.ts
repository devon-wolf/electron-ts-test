import * as indexModule from './index';

it('exists', () => {
  expect(indexModule).toBeTruthy();
});

it('says hello', () => {
  expect(indexModule.sayHello()).toEqual('Hello, world');
});
