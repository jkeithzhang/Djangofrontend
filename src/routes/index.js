import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import People from '../People'
import Question from '../Question'
import Reactstarter from '../Reactstarter'
import Answer from '../Answer'
import NameForm from '../NameForm.js'
import ContactsList from '../ContactsList.js'
import Movies from '../Movies.js'
import PageNotFound from '../PageNotFound.js'

export default() => (
	<BrowserRouter>
		<div>
			<Route path="/" component={Reactstarter}/>
			
			<Route path="/people" exact component={People}/>
			
			<Route path="/question" component={Question}/>
			<Route path="/question/:id" exact component={Answer}/>

			<Route path="/nameform" exact component={NameForm}/>

			<Route path="/inputfilter" exact component={ContactsList}/>

			<Route path="/movies" exact component={Movies}/>

			<Route path="/404" exact component={PageNotFound}/>
		</div>
	</BrowserRouter>
);