context('Search for a country', () => {
	it('User search country by country code', () => {
		cy.visit('/');
		cy.findByRole('heading', {name: /countries of the world/i});
		cy.findByText(/loading\.\.\./i)
		cy.findByRole('textbox');
		cy.findByPlaceholderText(/search country code/i);
		cy.findByRole('columnheader', {name: /code/i});
		cy.findByRole('columnheader', {name: /country/i});
		cy.findByRole('list');
		cy.findByRole('button', {name: /left/i });
		cy.findByRole('textbox').type('ee');
		cy.findByRole('cell', {name: /ee/i});
		cy.findByRole('cell', {name: /estonia/i})
	});

	it('User cannot find the country', () => {
		cy.visit('/');
		cy.findByRole('heading', {name: /countries of the world/i});
		cy.findByText(/loading\.\.\./i)
		cy.findByRole('textbox');
		cy.findByPlaceholderText(/search country code/i);
		cy.findByRole('columnheader', {name: /code/i});
		cy.findByRole('columnheader', {name: /country/i});
		cy.findByRole('list');
		cy.findByRole('button', {name: /left/i });
		cy.findByRole('textbox').type('adr');
		cy.findByRole('alert');
		cy.findByText(/Country Code Not Found/i);
		cy.findByText(/country code has 2 characters - for example: ee for estonia/i);
		cy.findByRole('textbox').type('{backspace}');
		cy.findByRole('cell', {name: /ad/i} );
		cy.findByRole('cell', {name: /andorra/i} );
	})

	it('User looks up for two countries in a row', () => {
		cy.visit('/');
		cy.findByRole('heading', {name: /countries of the world/i});
		cy.findByText(/loading\.\.\./i)
		cy.findByRole('textbox');
		cy.findByPlaceholderText(/search country code/i);
		cy.findByRole('columnheader', {name: /code/i});
		cy.findByRole('columnheader', {name: /country/i});
		cy.findByRole('list');
		cy.findByRole('button', {name: /left/i});
		cy.findByRole('textbox').type('jp');
		cy.findByRole('cell', {name: /jp/i});
		cy.findByRole('cell', {name: /japan/i})
		cy.findByRole('button', {name: /close-circle/i}).click();
		cy.findByRole('textbox').type('lv');
		cy.findByRole('cell', {name: /lv/i});
		cy.findByRole('cell', {name: /latvia/i});
	})
});
