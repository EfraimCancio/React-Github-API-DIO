import React from 'react';
import * as S from './styled';
import RepositoryItem from '../repositoryItem'

const Repositories = () => {
    return (
        <S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name="Curso-HTML" 
                    linkToRepo="https://github.com/EfraimCancio/Curso-HTML"
                    fullName="EfraimCancio/Curso-HTML"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="Curso-JS" 
                    linkToRepo="https://github.com/EfraimCancio/Curso-JS"
                    fullName="EfraimCancio/Curso-JS"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
};

export default Repositories;
