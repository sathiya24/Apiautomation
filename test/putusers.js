//importing packages 
import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"
import jsonschema1 from "../test_data/jsonschema/putusers.json"
import inputbody from "../inputbody"

chai.use(require('chai-json-schema'));


//variables
const url = supertest(config.baseurl);
const url2 = supertest(config.baseurl2);

//positive scenario
describe('Put/users', () => {
    it('PUT/update details in id', async() => {
        const response = await url.put(config.putuser)
        .type('application/json')
        .send({
          'name':inputbody.putbody,
          'job':inputbody.putbody1,

        })
        
        .expect(200)
        .expect((res) => {
           // console.log(res)
         expect(res.body).to.be.jsonSchema(jsonschema1.valid_schema)
         })
    }); 

    //Negative scenario
    it('PUT/update invalid details in id', async() => {
        const response = await url2.put(config.putuser1)
        .type('application/json')
        .send({
          'name':inputbody.putbody2,
          'job':inputbody.putbody3,
          })
        
        .expect(403)
        .expect((res) => {
           // console.log(res)
         expect(res.body).to.be.jsonSchema(jsonschema1.invalid_schema)
         })
    }); 
});

