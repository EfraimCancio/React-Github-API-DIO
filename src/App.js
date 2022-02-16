
import React from 'react';
import GithubProvider from './providers/github-provider'
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';

const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS/>
        <Layout>   
          <Profile></Profile> 
          <Repositories></Repositories>
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
