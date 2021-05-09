//importing packages 
import supertest from "supertest"
import config from "../config"
import chai from "chai"
import { expect } from "chai"
import jsonschema2 from "../test_data/jsonschema/putusers.json"

chai.use(require('chai-json-schema'));

//variables
const url = supertest(config.baseurl);
describe('Put/users', () => {
    it('PUT/update details in id', async() => {
        const response = await url.put(config.putuser)
        .type('application/json')
        .send ({
            "name": "morpheus",
            "job": "zion resident"
        })
        
        .expect(200)
        .expect((res) => {
           // console.log(res)
         expect(res.body).to.be.jsonSchema(jsonschema2.valid_schema)
         })
    }); 
});

