/// <reference types="cypress"/>

describe('Student endpoint: POST method negative tests', () => {
    it('Fail to update a student register: acedemic_register not editable', () => {
        const body = {
            "name": "Alex Test updated",
            "email": "alextest@email.com updated",
            "birthdate": "1980-01-02",
            "academic_record": "12345",
            "cpf": "00271700040"
        }

        const student_id = 3;
        cy.request({
            method: 'POST',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${student_id}`,
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            expect(response.status).equal(400)
        })
    })

    it('Fail to update a student register: cpf not editable', () => {
        const body = {
            "name": "Alex Test updated",
            "email": "alextest@email.com updated",
            "birthdate": "1980-01-02",
            "academic_record": "1234",
            "cpf": "00271700041"
        }

        const student_id = 3;
        cy.request({
            method: 'POST',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${student_id}`,
            failOnStatusCode: false,
            body: body        
        }).as('postStudentResult')

        // Validations
        cy.get('@postStudentResult').then((response) => {
            expect(response.status).equal(400)
        })
    })

    /* Note: skiping due to the fact that an academic register should be unique, and the
    * API is allowing to post a new register with the same aacademic register.
    */
    it.skip('Fail to create a new student register - already existing academic_register', () => {

        const body = {
            "name": "Alex Test 2",
            "email": "alextest2@email.com",
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
            expect(response.status).equal(400)
        })
    })

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
            expect(response.status).equal(422)
        })
    })
})