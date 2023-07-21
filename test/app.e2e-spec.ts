import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer()).get('/products').expect(200).expect([]);
  });

  it('/products/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/products/1')
      .expect(200)
      .expect('');
  });

  it('/products (POST)', () => {
    return request(app.getHttpServer())
      .post('/products')
      .send({ name: 'Iphone 14' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            img: expect.any(String),
            price: expect.any(Number),
            type: expect.any(String),
            description: expect.any(String),
            quantity: expect.any(Number),
          }),
        );
      });
  });

  it('/products/1 (GET)', () => {
    return request(app.getHttpServer()).get('/products/1').expect(200).expect({
      id: 1,
      name: 'Iphone 14',
    });
  });

  it('/products/1 (DELETE)', () => {
    return request(app.getHttpServer()).delete('/products/1').expect(200);
  });
});
