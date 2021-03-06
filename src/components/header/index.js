import React, {useState} from 'react';
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };
    return (
        <header>
            <S.Wrapper>
                <input type="text" onChange={(event) => setUsernameForSearch(event.target.value)} placeholder="Digite o User Name para pesquisar"/>
                <button type="submit" onClick={submitGetUser}>Buscar</button>
            </S.Wrapper>
        </header>
    );
};

export default Header;
