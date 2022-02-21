import React, { useEffect, usestate } from 'react';
import * as S from './styled';
import RepositoryItem from '../repositoryItem';
import useGithub from '../../hooks/github-hooks';

const Repositories = () => {

    const { githubState, getUserRepos, getUserStarred} = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] =  useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);
    }, [githubState.user.login]);

    return (
        <>
            {hasUserForSearchrepos ? (
                <S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem 
                                key={item.id}
                                name="Curso-HTML" 
                                linkToRepo="https://github.com/EfraimCancio/Curso-HTML"
                                fullName="EfraimCancio/Curso-HTML"
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>
                     </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <></>
            )}    
        </>     
    );
};

export default Repositories;
