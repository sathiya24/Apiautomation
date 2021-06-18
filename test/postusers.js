import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"
import jsonschema from "../test_data/jsonschema/postusers.json"
import inputbody from "../inputbody"

chai.use(require('chai-json-schema'));
//variables
const url = supertest(config.baseurl);

describe('POST/users', () => {

    //positive scenario
    it('POST/create details in page', async() => {
       const response = await url.post(config.postuser)
       .type('application/json')
       .send({
         'name':inputbody.postbody,
         'job':inputbody.postbody1,
       })

     
       .expect(201)
       .expect((res) => {
           //console.log(res)
        expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
        })
    });

    
   //negative scenario
    it('POST/create invalid details in page', async() => {
       const response = await url.post(config.postuser1)
       .type('application/json')
       .send({
         'name':inputbody.postbody2,
         'job':inputbody.postbody3,
       })


      .expect(404)
      .expect((res) => {
        //console.log(res)
       expect(res.body).to.be.jsonSchema(jsonschema.invalid_schema)
    })  
  });

});