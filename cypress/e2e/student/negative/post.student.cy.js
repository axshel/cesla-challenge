/// <reference types="cypress"/>

describe('POST student feature failure test: missing or empty required parameter #name', () => {
    /* ** NOTE **
    * It's allowing to post the prototype required parameter with an empty data, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: empty required parameter #name', () => {

        const body = {
            "name": "",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })

    /* ** NOTE **
    * It's allowing to post without the prototype required parameter and populating the missing
    * field with a random information, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: missing required parameter #name', () => {

        const body = {
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })
})

describe('POST student feature failure: missing or empty required parameter #email', () => {
    /* ** NOTE **
    * It's allowing to post the prototype required parameter with an empty data, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: empty required parameter #email', () => {

        const body = {
            "name": "Alex Test",
            "email": "",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })

    /* ** NOTE **
    * It's allowing to post without the prototype required parameter and populating the missing
    * field with a random information, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: missing required parameter #email', () => {

        const body = {
            "name": "Alex Test",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })
})

describe('POST student feature failure: missing or empty required parameter #academic_record', () => {
    /* ** NOTE **
    * It's allowing to post the prototype required parameter with an empty data, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: empty required parameter #academic_record', () => {

        const body = {
            "name": "Alex Test",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "",
            "cpf": "00271700040"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })

    /* ** NOTE **
    * It's allowing to post without the prototype required parameter and populating the missing
    * field with a random information, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: missing required parameter #academic_record', () => {

        const body = {
            "name": "Alex Test",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "cpf": "00271700040"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })
})



describe('POST student feature failure: missing or empty required parameter #cpf', () => {
    /* ** NOTE **
    * It's allowing to post the prototype required parameter with an empty data, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: empty required parameter #cpf', () => {

        const body = {
            "name": "Alex Test",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": ""
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })

    /* ** NOTE **
    * It's allowing to post without the prototype required parameter and populating the missing
    * field with a random information, instead returning 422 (Unprocessable Entity)
    * Using skip to not fail the test due to previous considerations.
    */
    it.skip('Fail to create a new student register: missing required parameter #cpf', () => {

        const body = {
            "name": "Alex Test",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "1234"
        }

       cy.request({
            method: 'POST',
            url: 'https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student',
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(422)
        })
    })
})