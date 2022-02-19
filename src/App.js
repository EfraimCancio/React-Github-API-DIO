
import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from '../../hooks/github-hooks';

const App = () => {
  const { githubState } = useGithub();
  return (
        <Layout>
          {githubState.hasUser ? (
            <>
              {githubState.loading ? (
              <p>Loading</p>
              ) : (
                <>
                  <Profile></Profile> 
                  <Repositories></Repositories>
                </>
              )}           
            </> ) : (
              <div>Nenhum usuário pesquisado<div/>         
          )};
        </Layout>
  );
}

export default App;
