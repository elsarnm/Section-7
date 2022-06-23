Given ('I navigate to the website', ()=>{
    cy.visit('http://zero.webappsecurity.com/')
})

When ('I type some text into Searchbox and click enter', ()=>{
    cy.get('#searchTerm').type('some text {enter}')
})

Then ('I should see Search Result:', ()=>{
    cy.get('h2').should('contain.text', 'Search Results:')
})