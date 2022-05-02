import React from 'react';
import styled from './userForm.module.css';
import { useState, useRef } from 'react';

const UserForm = () => {
  const isFormValue = useRef(false);
  const [inputs, setInputs] = useState({
    email: '',
    pw: '',
    pwCheck: '',
    name: '',
    birth: '',
  });

  const [isEmail, setIsEmail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isFocus, setIsFocus] = useState({
    isEmail: false,
    isPw: false,
  });

  const [genderSelect, setGenderSelect] = useState({
    gender: 'male',
  });

  const { email, pw, pwCheck, name, birth } = inputs;
  const { gender } = genderSelect;

  const isValidValue = e => {
    const { name, value } = e.target;
    const isValidProps = {
      isValidEmail:
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
      isPw: /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/,
    };

    switch (name) {
      case 'email':
        setIsEmail(
          isValidProps['isValidEmail'].test(value),
        );
        break;
      case 'pw':
        setIsPw(isValidProps['isPw'].test(value));
        break;
      default:
        return false;
    }
  };

  const onFormChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    isFormValue.current = true;
  };

  const onChangeGender = e => {
    setGenderSelect({
      gender: e.target.value,
    });
  };

  const checkPw = (p1, p2) => p1 === p2;
  const onClickCheckPw = e => {
    let isCheck = pw && checkPw(pw, pwCheck);

    if (isPw) {
      // console.log('유효성 o');
      if (isCheck) {
        alert('비밀번호가 일치합니다.');
      } else {
        alert('비밀번호가 일치하지 않습니다.');
        setInputs({
          ...inputs,
          pw: '',
          pwCheck: '',
        });
      }
    } else {
      // console.log('유효성 x');
      alert('비밀번호가 유효하지 않습니다.');

      setIsFocus({
        ...isFocus,
        isPw: false,
      });
      setInputs({
        ...inputs,
        pw: '',
        pwCheck: '',
      });
    }

    console.log('isPw:', isPw);
  };

  const onSubmit = e => {
    e.preventDefault();
    const userInfo = {
      email,
      pw,
      pwCheck,
      name,
      birth,
      gender,
    };

    console.log('userInfo: ', userInfo);
  };

  console.log(isFocus.isEmail);
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>
        <span style={{ fontSize: '25px' }}>회원가입</span>
      </h1>
      <hr />
      <div className={styled.frmWrap}>
        <form
          onSubmit={onSubmit}
          className={styled.frmGroup}
        >
          <div className={styled.inputGroup}>
            <label
              className={styled.inputName}
              htmlFor="email"
            >
              이메일<span className={styled.ico}>*</span>
            </label>
            <div className={styled.inputWrap}>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="이메일"
                autoComplete="off"
                onChange={onFormChange}
                onFocus={e =>
                  setIsFocus({
                    ...isFocus,
                    isEmail: true,
                  })
                }
                onBlur={isValidValue}
                value={email}
              />
              <button
                type="button"
                className={styled.checkBtn}
              >
                중복확인
              </button>
              {isFocus.isEmail && (
                <p
                  className={`${styled.valid} ${
                    isEmail
                      ? styled.validsuccess
                      : styled.validError
                  }`}
                >
                  {isEmail
                    ? '이메일 형식이 올바릅니다.'
                    : '이메일 형식이 올바르지 않습니다.'}
                </p>
              )}
            </div>
          </div>
          <div className={styled.inputGroup}>
            <label
              className={styled.inputName}
              htmlFor="pw"
            >
              비밀번호<span className={styled.ico}>*</span>
            </label>
            <div className={styled.inputWrap}>
              <input
                type="password"
                id="pw"
                name="pw"
                required
                className={styled.inputW100}
                placeholder="비밀번호"
                onChange={onFormChange}
                onBlur={isValidValue}
                onFocus={e =>
                  setIsFocus({
                    ...isFocus,
                    isPw: true,
                  })
                }
                value={pw}
              />
              {isFocus.isPw && (
                <p
                  className={`${styled.valid} ${
                    isPw
                      ? styled.validsuccess
                      : styled.validError
                  }`}
                >
                  문자와 특수문자 조합의 6 ~ 24자리를 입력
                </p>
              )}
            </div>
          </div>
          <div className={styled.inputGroup}>
            <label
              className={styled.inputName}
              htmlFor="pw-check"
            >
              비밀번호 확인
              <span className={styled.ico}>*</span>
            </label>
            <div className={styled.inputWrap}>
              <input
                type="password"
                id="pw-check"
                name="pwCheck"
                required
                placeholder="비밀번호 확인"
                onChange={onFormChange}
                value={pwCheck}
              />
              <button
                type="button"
                onClick={onClickCheckPw}
                className={styled.checkBtn}
              >
                비밀번호 확인
              </button>
            </div>
          </div>
          <div className={styled.inputGroup}>
            <label
              className={styled.inputName}
              htmlFor="name"
            >
              이름<span className={styled.ico}>*</span>
            </label>
            <div className={styled.inputWrap}>
              <input
                type="text"
                required
                id="name"
                className={styled.inputW100}
                name="name"
                placeholder="이름"
                autoComplete="off"
                onChange={onFormChange}
                value={name}
              />
            </div>
          </div>
          <div className={styled.inputGroup}>
            <label
              className={styled.inputName}
              htmlFor="gender"
            >
              성별
              <div className={styled.inputWrap}>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={genderSelect.gender === 'male'}
                  onChange={onChangeGender}
                />
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={genderSelect.gender === 'female'}
                  onChange={onChangeGender}
                />
              </div>
            </label>
          </div>
          <div className={styled.inputGroup}>
            <label
              className={styled.inputName}
              htmlFor="birth"
            >
              생년월일
            </label>
            <div className={styled.inputWrap}></div>
            <input
              type="date"
              id="birth"
              name="birth"
              onChange={onFormChange}
              value={birth}
            />
          </div>
          <button
            onClick={e => {
              e.preventDefault();
              console.log('취소');
              setInputs({
                ...inputs,
                email: '',
                pw: '',
                pwCheck: '',
                name: '',
              });
              console.log(pw);
            }}
            className={styled.frmBtn}
            type="reset"
          >
            취소하기
          </button>
          <button
            onClick={e => console.log(e.target.value)}
            className={styled.frmBtn}
            type="submit"
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
