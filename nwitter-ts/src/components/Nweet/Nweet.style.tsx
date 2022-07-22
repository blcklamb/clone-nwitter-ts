import styled from 'styled-components'

export const NweetContainer = styled.div`
  margin-bottom: 20px;
  background-color: white;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.8);
`

export const NweetEditForm = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
`

export const NweetFormInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid black;
  text-align: center;
  background-color: white;
  color: black;
`
export const NweetFormBtn = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 7px 20px;
  text-align: center;
  color: white;
  border-radius: 20px;
  background-color: #04aaff;
`

export const NweetEditCancelBtn = styled.button`
  width: 100%;
  padding: 7px 20px;
  text-align: center;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  background-color: tomato;
`

export const NweetAction = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`
