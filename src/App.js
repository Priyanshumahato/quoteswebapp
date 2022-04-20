import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  // to make thsese work you need to wrap ur app in index.js with BrowserRouter component
  // /: for dynamic path sequence can be any value
  // Switch is used to to get the exact url we use switch which work on strict mode render the component we actually need
  // exact is needed otherwise switch goes for the first path thst it feels appropiate
  // use can define nested routes
  // we use unsParam to get the dynamic name of the url
  // path "*" whold be at the last as it will match to any url and we need this to output our 404 page
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
