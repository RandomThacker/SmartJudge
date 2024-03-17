import request from 'supertest';
import {app} from '../app'

describe("Server Health Check",()=>{
    test("GET /health",(done)=>{
        request(app)
        .get("/health")
        .expect(200)
        .expect((res)=>{
            res.body = "Server is healthy";
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
});

