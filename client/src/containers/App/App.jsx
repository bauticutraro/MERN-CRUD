import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// styles
import GlobalStyle from '../../global-styles';
// components
import Nav from '../../components/Navbar/Nav';
// containers
const Books = lazy(() => import('../Books/Books'));
const Book = lazy(() => import('../Books/Book'));
const AddBook = lazy(() => import('../Books/AddBook'));
const EditBook = lazy(() => import('../Books/EditBook'));

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path='/' component={Books} exact />
          <Route path='/add' component={AddBook} exact />
          <Route path='/:id' component={Book} exact />
          <Route path='/edit/:id' component={EditBook} exact />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
