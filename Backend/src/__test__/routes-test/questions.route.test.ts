import request from 'supertest';
import { app } from '../../app';

describe("Question Route Health Check", () => {
    test("GET /question/health", (done) => {
        request(app)
            .get("/question/health")
            .expect(200)
            .expect((res) => {
                res.body.isHealthy = true;
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});

describe("Get all questions from DB", () => {
    test("GET /question/", (done) => {
        request(app)
            .get("/question/")
            .expect(200)
            .expect((res) => {
                res.body.length > 0;
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});



