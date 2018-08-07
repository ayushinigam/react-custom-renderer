import officegen from 'officegen'

// This creates the document instance
class Deck {
	constructor() {
		this.doc = officegen('pptx')
	}
}

export default Deck