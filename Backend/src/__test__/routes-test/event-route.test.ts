import request from 'supertest';
import { app } from '../../app';

const routerName = "events";

describe("Code Run Route Health Check", () => {
    test(`GET /${routerName}/health`, (done) => {
        request(app)
            .get(`/${routerName}/health`)
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

describe("GET Events : Mainly for home page", () => {
    test(`GET /${routerName}`, (done) => {
        request(app)
            .get("/events")
            .expect(200)
            .expect((res) => {
                res.body.size >= 1;
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    test(`GET /${routerName} : No events`, (done) => {
        request(app)
            .get("/events")
            .expect(200)
            .expect((res) => {
                res.body.size == 0;
            })
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    
    test(`GET /events/:eventname : Individual Event deets`, (done) => {
        request(app)
            .get(`/events`)
            .expect(200)
            .expect((res) => {
                const eventArr = res.body;                
                const randomEvent = eventArr.events.length > 0 ? eventArr.events[0].eventName : ""; 
                
                if (randomEvent) {
                    request(app)
                        .get(`/events/${randomEvent}`)
                        .expect(200)
                        .expect((res) => {
                            res.body.eventName.length>1;
                        })
                        .end((err, res) => {
                            if (err) return done(err);
                            done();
                        });
                } 
            })
            .end((err, res) => {
                if (err) return done(err);
            });
    });
    
    
  
});
