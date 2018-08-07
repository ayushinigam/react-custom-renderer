import React, { Component } from 'react';

import { Text, render } from './src/index.js';

class App extends Component {
	render() {
		return <Text>First one</Text>
	}
}

// This will create a file 'text.docx' in the current directory!
render(<App />, `${__dirname}/text.docx`);