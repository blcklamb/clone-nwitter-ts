import styled from 'styled-components'

export const FactoryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FactoryInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`

export const FactoryInput = styled.input`
  flex-grow: 1;
  height: 40px;
  padding: 0px 20px;
  color: white;
  border: 1px solid #04aaff;
  border-radius: 20px;
  font-weight: 500;
  font-size: 12px;
`

export const FactoryInputArrow = styled.input`
  position: absolute;
  right: 0;
  background-color: #04aaff;
  height: 40px;
  width: 40px;
  padding: 10px 0px;
  text-align: center;
  border-radius: 20px;
  color: white;
`

export const FactoryInputLabel = styled.label`
  color: #04aaff;
  cursor: pointer;
`

export const FactoryInputLabelSpan = styled.span`
  margin-right: 10px;
  font-size: 12px;
`

export const FactoryFormAttachment = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FactoryFormClear = styled.div`
  color: #04aaff;
  cursor: pointer;
  text-align: center;
`

export const FactoryFormAttachmentImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`
