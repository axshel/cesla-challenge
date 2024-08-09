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
            let expectedResult = {createdAt:"2024-04-25T17:16:32.989Z",name:"Fernanda",birthdate:"2024-05-08T00:00:00.000",cpf:"001.511.544-57",email:"fer@root.com",academic_record:"5678",id:"3"}

            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty

            expect(response.body.name).string
            expect(response.body.name).equal('Fernanda')

            expect(response.body.birthdate).not.empty
            let birthDate = new Date(response.body.birthdate.toString())
            expect(birthDate.toISOString().split('T')[0]).string;
            expect(birthDate.toISOString().split('T')[0]).equal("2024-05-08")

            expect(response.body.cpf).not.empty
            expect(response.body.cpf).string
            expect(response.body.cpf).equal("001.511.544-57")

            expect(response.body.email).not.empty
            expect(response.body.email).string
            expect(response.body.email).equal("fer@root.com")

            expect(response.body.academic_record).not.empty
            expect(response.body.academic_record).string
            expect(response.body.academic_record).equal("5678")

            expect(response.body).to.deep.equal(expectedResult)
        })
    })
})