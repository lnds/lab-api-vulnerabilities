const request = require("supertest")
const {app} = require("./index")

describe("GET /users", () => {
  test("should return 500 because no db configured", async() => {
    return request(app)
      .get("/users")
      .expect(500)
      .then(({body}) =>{
        console.log(body)
      })
  })
})
