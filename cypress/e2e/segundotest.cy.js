describe('template spec', () => {
  it('crear tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')

   
})
  })
