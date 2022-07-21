import styled from 'styled-components'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const AuthButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
`

export const AuthFormContainer = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
`
export const AuthFormInput = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
  font-size: 12px;
  color: black;
`

export const AuthFormSubmit = styled.input`
  max-width: 320px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  margin-bottom: 10px;
  font-size: 12px;

  text-align: center;
  background: #04aaff;
  color: white;
  margin-top: 10;
  cursor: pointer;
`

export const AuthSwitch = styled.span`
  color: #04aaff;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 50px;
  display: block;
  font-size: 12px;
  text-decoration: underline;
`
