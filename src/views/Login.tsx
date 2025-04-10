import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { SiMaildotru } from "react-icons/si";
import styled from "styled-components"
import { $auth } from "../plugins/axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate();
  const loginFocus = useRef<HTMLInputElement>(null);

  const handleEmail = (e:React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePass = (e:React.FormEvent<HTMLInputElement>) => {
    setPass(e.currentTarget.value);
  };

  const iconStyle = {
    color: '#fff'
  }

  const userIconStyle = {
    width: '80px',
    height: '80px',
    color: '#fff'
  }

  const handleInputError = (element: string) => {
    if (element === 'email') {
      setEmailError(true);

      setTimeout(() => {
        setEmailError(false);
      }, 2000);
    }

    if (element === 'pass') {
      setPassError(true);

      setTimeout(() => {
        setPassError(false);
      }, 2000);
    }
  };

  const handleLogin = async () => {
    if (!email) {
      handleInputError('email');
      return;
    }
    if (!pass) {
      handleInputError('pass');
      return;
    }

    const res = await $auth.post('/login', {email: email, password: pass}, {withCredentials: true});

    if (res.status == 200) {
      navigate('/admin');
    }
  };

  const handleEnterKey = (e:React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") handleLogin();
  }

  useEffect(() => {
    loginFocus.current?.focus();
  }, []);

  return(
    <FormWrapper>
      <LoginForm>
        <FormIcon>
          <FaUserCircle style={userIconStyle} />
        </FormIcon>

        <FormTitle>Para prosseguir faça login.</FormTitle>

        <FormContainer>
          <InputIcon>
            <SiMaildotru style={iconStyle} />
          </InputIcon>
          <FormInput ref={loginFocus} type="email" placeholder="E-mail" value={email} onChange={e => handleEmail(e)} />
        </FormContainer>
        <FormContainer>

          <InputIcon>
            <GiPadlock style={iconStyle} />
          </InputIcon>
          <FormInput type="password" placeholder="Senha" value={pass} onChange={e => handlePass(e)} />
        </FormContainer>

        <FormButtonSend onClick={handleLogin} onKeyUp={e => handleEnterKey(e)}>
          Entrar
        </FormButtonSend>
      </LoginForm>
    </FormWrapper>
  )
}

const LoginForm = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 12px;
  padding: 25px 15px;
  background: linear-gradient(to bottom right, rgba(255, 0, 156, .5) 60%,rgba(255, 48, 203, .5));
  border-radius: 25px;
  box-shadow: 10px 15px 5px;
`;

const FormWrapper = styled.section`
  width: 100%;
  height: auto;
  min-height: calc(100dvh - 63px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background: rgba(39, 39, 39, .3);
  border-radius: 12.5px;
  padding: 5px 10px;
`;

const InputIcon = styled.i`
  width: 15px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #fff;
  padding: 0 5px;
`;

const FormInput = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #fff;
  width: 100%;
  height: auto;
  min-height: 35px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  padding-left: 15px;

  &::placeholder {
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #fff;
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

const FormTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 15px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
  text-align: center;
`;

const FormIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25%;
`;

const FormButtonSend = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  color: #fefefe;
  text-transform: uppercase;
  width: 100%;
  max-width: 192px;
  height: auto;
  min-height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom right, rgb(12, 202, 107) 60%,rgb(13, 150, 81));
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 5px 7px 10px #75064b;
  transform: translate3d(0, 0, 0);

  &:active {
    transform: translate3d(0, 5px, 0);
    box-shadow: 5px 2px 10px #75064b;
  }
`;