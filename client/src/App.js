import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import {ApolloProvider} from '@apollo/client';
// import ApolloClient from 'apollo-boost';

import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from "./elements/Footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Signup from './components/Signup';
import NoMatch from './components/noMatch';
import Browse from './components/Browse';


const httpLink = createHttpLink({
  uri: '/graphql',
});

//TODO: Uncomment when the auth is implemented
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache(),
});

//REVIEW:It was a conflict
// const client = new ApolloClient({
//   request: operation => {
//     const token = localStorage.getItem('id_token');

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ''
//       }
//     });
//   },
//   uri: '/graphql'


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="page-container">
        <div className="content-wrap">
      <Navbar />
      <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/browse" component={Browse}/>
              <Route exact path="/signup" component={Signup} />
              <Route component={NoMatch} />
            </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
