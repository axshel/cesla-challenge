/// <reference types="cypress"/>

describe('Student endpoint: PUT method', () => {

    it('Update a student register', () => {

        const oldRecord31 = {
            "name": "Alex Test",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

        const body = {
            "name": "Alex Test updated",
            "email": "alextestupdated@email.com",
            "birthdate": "1980-01-02",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

        const student_id = 31;
        cy.request({
            method: 'PUT',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${student_id}`,
            failOnStatusCode: false,
            body: body        
        }).as('putStudentResult')

        // Validations
        cy.get('@putStudentResult').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty

            expect(response.body.name).string
            expect(response.body.name).equal('Alex Test updated')
            
            expect(response.body.birthdate).string
            expect(response.body.birthdate).equal('1980-01-02')
            
            expect(response.body.cpf).string
            expect(response.body.cpf).equal('00271700040')
            
            expect(response.body.email).string
            expect(response.body.email).equal('alextestupdated@email.com')
            
            expect(response.body.academic_record).string
            expect(response.body.academic_record).equal('1234')

            expect(response.body).not.to.deep.equal(oldRecord31);

            // Back to the previous data
            cy.request({
                method: 'PUT',
                url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${student_id}`,
                failOnStatusCode: false,
                body: oldRecord31        
            }).as('putStudentResult')
        })
    })
})