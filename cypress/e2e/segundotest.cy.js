describe('template spec', () => {
  it('Crear tarea', () => {
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
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('[data-testid="todo-item"] > [data-testid="text-input"]').clear()
    cy.get('[data-testid="todo-item"] > [data-testid="text-input"]').type('Tarea 2{enter}')
    cy.get('.todo-list').contains('Tarea 2')
 })

it('Borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.todo-list').contains('Tarea 1')
   
 })


  it('Filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.new-todo').type('Tarea 2{enter}')
    cy.get('.new-todo').type('Tarea 3{enter}')
    cy.get('.new-todo').type('Tarea 4{enter}')
    cy.get('.new-todo').type('Tarea 5{enter}')
    cy.get('.new-todo').type('Tarea 6{enter}')
    cy.get('.todo-list li').should('have.length', 6)
    cy.get('.todo-list li').eq(0).find('.toggle').check()
    cy.get('.todo-list li').eq(3).find('.toggle').check()
    

  
 })











  })
