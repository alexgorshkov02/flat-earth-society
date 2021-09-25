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

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="page-container">
        <div className="content-wrap">
      <Navbar />
      <HomePage />
      </div>
      <Footer/>
    </div>
    </ApolloProvider>
  );
}

export default App;
