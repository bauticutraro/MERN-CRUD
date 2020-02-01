import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// styles
import GlobalStyle from '../../global-styles';
// components
import Navbar from '../../components/Navbar/Navbar';
// containers
const Books = lazy(() => import('../Books/Books'));
const Book = lazy(() => import('../Books/Book'));
const AddBook = lazy(() => import('../Books/AddBook'));
const UpdateBook = lazy(() => import('../Books/UpdateBook'));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path='/' component={Books} exact />
          <Route path='/add' component={AddBook} exact />
          <Route path='/:id' component={Book} exact />
          <Route path='/update/:id' component={UpdateBook} exact />
        </Switch>
      </Suspense>
    </>
  );
};
export default App;
