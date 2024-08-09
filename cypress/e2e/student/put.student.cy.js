/// <reference types="cypress"/>

/* ** NOTE **
* The PUT seems to not be working for this mock API hash id.
*/
describe('PUT student feature', () => {

    it.skip('Update a student register', () => {

        const oldRecord31 = {
            "name": "Alex Test",
            "email": "alextest@email.com",
            "birthdate": "1980-01-01",
            "academic_record": "1234",
            "cpf": "00271700040"
        }

        const body = {
            "name": "Alex Test updated",
            "email": "alextest@email.com updated",
            "birthdate": "1980-01-02",
            "academic_record": "12345",
            "cpf": "00271700041"
        }

        const student_id = '31';
        cy.request({
            method: 'PUT',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${student_id}`,
            failOnStatusCode: false,
            body: body        
        }).as('putStudentResult')

        // Validations
        cy.get('@putStudentResult').then((response) => {
            
            console.log(response)
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty

            expect(response.body.name).string
            expect(response.body.name).equal('Alex Test updated')
            
            expect(response.body.birthdate).string
            expect(response.body.birthdate).equal('1980-01-02')
            
            expect(response.body.cpf).string
            expect(response.body.cpf).equal('00271700041')
            
            expect(response.body.email).string
            expect(response.body.email).equal('alextest@email.com updated')
            
            expect(response.body.academic_record).string
            expect(response.body.academic_record).equal('12345')

            expect(response.body).not.to.deep.equal(oldRecord31);
        })
    })
})