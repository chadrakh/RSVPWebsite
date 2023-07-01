import styled from "@emotion/styled"

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  opacity: 90%;
  margin: 4em;
  padding: 2em;
`

export const Form = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 55%;
  }
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  color: #f7f7f7;
`

export const InlineFormLabel = styled.label`
  display: flex;
  margin-bottom: 1.5em;
  color: #f7f7f7;
`

export const FormInput = styled.input`
  padding: 0.5em;
  width: 100%;
  font-style: italic;
  color: #141414;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  width: 60%;
  padding: 1em;
  background-color: #f5f5dc;
  color: #141414;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ccccb4;
  }
`