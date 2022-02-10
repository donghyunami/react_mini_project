//비동기 방식: 순서 보장을 위한 async await 사용
import Axios from 'axios';

export const fetchLogin = async ({ email, password }) => {
  // console.log('요청', { email, password })

    const { data } = await Axios('http://localhost:8080/users');
    if (data) {
      //서버통신이 성공적으로 이루어지면 users에 json값 대입
      const users = data;

      const user = users.find(user => user.email === email);
      //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
      if (!user || user.password !== password) {
        throw new Error('아이디 또는 비밀번호가 일치하지 않습니다.');
      }
      return user;
    }
};
