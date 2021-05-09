import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"
import jsonschema from "../test_data/jsonschema/postusers.json"

chai.use(require('chai-json-schema'));
//variables
const url = supertest(config.baseurl);

describe('POST/users', () => {
    it('POST/create details in page', async() => {
       const response = await url.post(config.postuser)
       .type('application/json')
       .send ({
        "name": "morpheus",
        "job": "leader"
    
       }) 
       .expect(201)
       .expect((res) => {
           //console.log(res)
        expect(res.body).to.be.jsonSchema(jsonschema.valid_schema)
        })
    });
});
