const request = require("supertest");
const app = require("../app");

describe("Test the /api/register path", () => {

 

  test("It should response the POST method undefined =>", async () => {
    const response = await request(app).post("/api/register").send();
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method undefined =>", async () => {
    const response = await request(app).post("/api/register").send(undefined);
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method null =>", async () => {
    const response = await request(app).post("/api/register").send(null);
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {} =>", async () => {
    const response = await request(app).post("/api/register").send({});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method [] =>", async () => {
    const response = await request(app).post("/api/register").send([]);
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method 'text' =>", async () => {
    const response = await request(app).post("/api/register").send('text');
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {email: undefined} =>", async () => {
    const response = await request(app).post("/api/register").send({password:'123',passwordConfirm:'123'});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {email: undefined} =>", async () => {
    const response = await request(app).post("/api/register").send({emai:undefined});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {email: null} =>", async () => {
    const response = await request(app).post("/api/register").send({emai:null});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {email: ''} =>", async () => {
    const response = await request(app).post("/api/register").send({emai:''});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method  {email: 'test'} not match =>", async () => {
    const response = await request(app).post("/api/register").send({email:'test'});
    expect(response.statusCode).toBe(401);
  });
  
  test("It should response the POST method {password: undefined} =>", async () => {
    const response = await request(app).post("/api/register").send({email:'test@mail.com',passwordConfirm:'123'});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {password: undefined} =>", async () => {
    const response = await request(app).post("/api/register").send({password:undefined});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {password: null} =>", async () => {
    const response = await request(app).post("/api/register").send({password:null});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {password: ''} =>", async () => {
    const response = await request(app).post("/api/register").send({password:''});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {passwordConfirm: undefined} =>", async () => {
    const response = await request(app).post("/api/register").send({email:'test@mail.com',password:'123'});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {passwordConfirm: undefined} =>", async () => {
    const response = await request(app).post("/api/register").send({passwordConfirm:undefined});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {passwordConfirm: null} =>", async () => {
    const response = await request(app).post("/api/register").send({passwordConfirm:null});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method {passwordConfirm: ''} =>", async () => {
    const response = await request(app).post("/api/register").send({passwordConfirm:''});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method password and passwordConfirm not match =>", async () => {
    const response = await request(app).post("/api/register").send({email:'test@mail.com',password:'123',passwordConfirm:'111'});
    expect(response.statusCode).toBe(401);
  });

  test("It should response the POST method ok! =>", async () => {
    const response = await request(app).post("/api/register").send({email:'test@mail.com',password:'123',passwordConfirm:'123'});
    expect(response.statusCode).toBe(201);
  });
});