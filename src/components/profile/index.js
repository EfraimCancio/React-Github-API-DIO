import React from 'react';
import * as S from './styled';

const Profile = () => {
    return
    <S.Wrapper>
        <div>
          <img src="https://avatars.githubusercontent.com/u/80346376?v=4" alt="Avatar"/>
          <h1>Efras</h1>
          <h3>Username: </h3>
          <span>Efraim</span>
        </div>
        <div>
          <div>
            <h4>Followers</h4>
            <span>13</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>3</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>1</span>
          </div>
        </div>
    </S.Wrapper>;
};

export default Profile;