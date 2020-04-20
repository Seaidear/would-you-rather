import React, { useEffect } from 'react';
import Spinner from './layout/shared/Spinner';
import Login from './user/Login';
import PageContainer from './layout/shared/PageContainer';
import MainLayout from './layout/_MainLayout';
import { connect } from 'react-redux';

import { getUsers } from '../actions/users';
import { getQuestions } from '../actions/questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

const App = ({ user, loading, getUsers, getQuestions }) => {
  useEffect(() => {
    getUsers();
    getQuestions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MainLayout>
        {loading ? (
          <PageContainer>
            <Spinner />
          </PageContainer>
        ) : !user ? (
          <Login />
        ) : (
          <Routes />
        )}
      </MainLayout>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
  loading: state.loading,
});

export default connect(mapStateToProps, { getUsers, getQuestions })(App);
