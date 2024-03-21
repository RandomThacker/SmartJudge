import request from 'supertest';
import { app } from '../../app';

describe("Code Run Route Health Check", () => {
    test("GET /run/health", (done) => {
        request(app)
            .get("/run/health")
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

describe("Code Run Route : Run : Check", () => {
    test("POST /run", (done) => {
        request(app)
            .post("/run")
            .send({
                 code: "This is a line of code",
                 lang : "py"    
            })
            .expect(200)
            .expect((res) => {
                res.body.pass = true;
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    test("POST /run : empty file err handling", (done) => {
        request(app)
            .post("/run")
            .send({
                code: "",
                lang : "py"    
            }) 
            .expect(400)
            .expect((res) => {
                res.body.pass = false;
                res.body.error.length > 1;
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    test("POST /run : Invalid Language", (done) => {
        request(app)
            .post("/run")
            .send({ 
                code: "This is a code",
                lang : "pyt"
            })
            .expect(500)
            .expect((res) => {
                res.body.pass = false;
                res.body.error.length > 1;
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
