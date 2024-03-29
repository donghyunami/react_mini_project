import { useState, useContext } from 'react';
import styled from '@emotion/styled'
import { UserContext } from '../store/userContext';
import { fetchLogin } from '../utils/fetchLogin';

// 변수를 export하면 불러올 때 {}
// require("../utils/fetchLogin")
// console.log(require("../utils/fetchLogin").fetchLogin)
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FromContainer = styled.div`
  width: 500px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
`;

function LoginForm() {
  //글로벌 전역 상태값 setUser를 받아옴
  //로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음
  const { setUser, isAuth, setIsAuth } = useContext(UserContext);
  // console.log(useContext(UserContext)) //{user: '', setUser: ƒ}

  //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
  });

  //input에 입력하면 자동적으로 account state값 변경
  const onChangeAccount = e => {
    //...을 이용하여 account의 복사본을 만들고
    //input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
    //console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공!!
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };

  //동기식으로 로그인정보를 통신하여 출력
  const onSubmitAccount = async () => {
    try {
      console.log(userForm);
      const user = await fetchLogin(userForm);

      //성공하면 해당 user 아이디 패스워드값 셋팅
      setUser(user);
      setIsAuth(!isAuth);
      //성공하면 해당 url로 이동(main페이지로)
    } catch (error) {
      //실패하면 throw new Error("") 값 출력
      window.alert(`error: 네트워크 오류가 발생했습니다.\n 관리자에게 문의해주세요`);
    }
  };
  return (
    <Container>
      <FromContainer>
        <Input
          id="email"
          name="email"
          placeholder="아이디를 입력해주세요"
          onChange={onChangeAccount}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangeAccount}
        />
        <Button onClick={onSubmitAccount}>로그인</Button>
      </FromContainer>
    </Container>
  );
}

export default LoginForm;
