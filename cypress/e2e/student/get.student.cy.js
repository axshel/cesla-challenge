/// <reference types="cypress"/>

describe('Students endpoint: GET method', () => {

    it('Get a list of students', () => {

        cy.request({
            method: 'GET',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student`,
            failOnStatusCode: false
        }).as('getStudentResult')

        // Valiations
        cy.get('@getStudentResult').then((response) => {
            expect(response.status).equal(200)

            expect(response.body).not.empty

            expect(response.body[0].id).not.empty
            expect(response.body[0].createdAt).not.empty

            expect(response.body[0].name).not.empty
            expect(response.body[0].name).string

            expect(response.body[0].birthdate).not.empty

            expect(response.body[0].cpf).not.empty
            expect(response.body[0].cpf).string

            expect(response.body[0].email).not.empty
            expect(response.body[0].email).string

            expect(response.body[0].academic_record).not.empty
            expect(response.body[0].academic_record).string
        })
    })

    it('Get a specific student', () => {

        const student_id = 3

        cy.request({
            method: 'GET',
            url: `https://653c0826d5d6790f5ec7c664.mockapi.io/api/v1/student/${student_id}`,
            failOnStatusCode: false
        }).as('getStudentResult')

        //Valiations
        cy.get('@getStudentResult').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty

            expect(response.body.name).string
            expect(response.body.name).equal('Alex Test')

            expect(response.body.birthdate).not.empty
            let birthDate = new Date(response.body.birthdate.toString())
            expect(birthDate.toISOString().split('T')[0]).string;
            expect(birthDate.toISOString().split('T')[0]).equal("1980-01-01")

            expect(response.body.cpf).not.empty
            expect(response.body.cpf).string
            expect(response.body.cpf).equal("00271700040")

            expect(response.body.email).not.empty
            expect(response.body.email).string
            expect(response.body.email).equal("alextest@email.com")

            expect(response.body.academic_record).not.empty
            expect(response.body.academic_record).string
            expect(response.body.academic_record).equal("1234")
        })
    })
})