describe('template spec', () => {
  it('crear tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
  
})

it('Marcar tarea como completa', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    cy.get('[data-testid="todo-item-toggle"]').click()
  
})

it('Desmarcar tarea completa', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
  
})


it('Editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    
    
})

it('Borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    
    
})

it('Filtrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
    
    
})

  })
