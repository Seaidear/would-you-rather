import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './layout/shared/Spinner';
import Login from './user/Login';
import PageContainer from './layout/shared/PageContainer';
import MainLayout from './layout/_MainLayout';
import Routes from './Routes/Routes';
import { getUsers } from '../actions/users';
import { getQuestions } from '../actions/questions';

const App = () => {
  const user = useSelector((state) => state.auth);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  }, [dispatch]);

  return (
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
  );
};

export default App;
