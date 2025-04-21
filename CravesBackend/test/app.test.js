// test/app.test.js
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const mongoose = require("mongoose");
const { expect } = chai;
const app = require("../index"); 
chai.use(chaiHttp);

describe("Express Application Unit Tests", () => {
  before(() => {
    // Stub the Mongoose connect method to prevent actual DB connection during tests
    sinon.stub(mongoose, "connect").resolves();
  });

  after(() => {
    // Restore the original Mongoose connect method
    mongoose.connect.restore();
  });

  // Test the GET / route
  describe("GET /", () => {
    it("should return a welcome message", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property("message").eql("Welcome to the Craves Backend 🧑🏼‍🍳");
          done();
        });
    });
  });

  // Test the POST /api/v1/auth/login route (example)
  describe("POST /api/v1/auth/signin", () => {
  
    // Test case for successful login
    // it("should return a successful login message", (done) => {
    //   chai
    //     .request(app)
    //     .post("/api/v1/auth/signin")
    //     .send({
    //       phoneNumber: "891321323",
    //       otp: "1212",
    //     })
    //     .end((err, res) => {
    //       expect(res).to.have.status(200);
    //       expect(res.body).to.have.property("message").eql("Login successful.");
    //       done();
    //     });
    // });
  
    // Test case for missing phone number and email
    it("should return an error if both phone number and email are missing", (done) => {
      chai
        .request(app)
        .post("/api/v1/auth/signin")
        .send({
          otp: "1212",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property("message").eql("Please provide a phone number or email.");
          done();
        });
    });
  
    // Test case for missing OTP
    it("should return an error if OTP is missing", (done) => {
      chai
        .request(app)
        .post("/api/v1/auth/signin")
        .send({
          phoneNumber: "891321323",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property("message").eql("Please provide the OTP.");
          done();
        });
    });
  
    // Test case for invalid OTP
    it("should return an error if OTP is invalid", (done) => {
      chai
        .request(app)
        .post("/api/v1/auth/signin")
        .send({
          phoneNumber: "891321323",
          otp: "wrongOtp",
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property("message").eql("The OTP is not valid");
          done();
        });
    });
  });
});
  