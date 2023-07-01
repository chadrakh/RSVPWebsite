import styled from '@emotion/styled';
import { FC, FormEvent, useState } from 'react';
import StyledText from "../../common/Texts/StyledText";
import { RSVPData } from '../../../store/consts/types';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  opacity: 90%;
  margin: 4em;
  padding: 2em;
`;

const Form = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  color: #f7f7f7;
`;

const InlineLabel = styled.label`
  display: flex;
  margin-bottom: 1.5em;
  color: #f7f7f7;
`;

const Input = styled.input`
  padding: 0.5em;
  width: 100%;
  font-style: italic;
  color: #141414;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
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
`;

type RSVPFormProps = {
  onSubmit: (guestData: RSVPData) => void;
};

const RSVPForm: FC<RSVPFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  // const [additionalGuests, setAdditionalGuests] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();


      if (name.length > 0) {
          const guestData: RSVPData = {
              name: name,
              telNumber: telNumber,
              email: email,
              isAttending: isAttending ? 'Yes' : 'No',
              guestCount: guestCount.toString(),
              message: message,
          };

      onSubmit(guestData);

      setName('');
      setTelNumber('');
      setEmail('');
      setIsAttending(false);
      // setAdditionalGuests(false);
      setGuestCount(0);
      setMessage('');
    }
  };

  return (
      <FormWrapper>
          <StyledText 
            type="header"
            size="xx-large">
            RSVP
          </StyledText>

          <StyledText 
            type="body"
            size="medium">
            Saturday, 26 August, 2023
          </StyledText>

          <StyledText 
            type="body"
            size="medium">
            12:00 PM Ceremony
          </StyledText>

          <StyledText 
            type="body"
            size="medium">
            Bury Hall BL9 0ST
          </StyledText>

          <StyledText
              type="header"
              size="xx-large">
            Will you attend?
          </StyledText>
          
          <Form onSubmit={handleSubmit}>
          <Label>
            <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
          </Label>
          <Label>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={telNumber.trim()}
            onChange={(e) => setTelNumber(e.target.value)}
          />
          </Label>
          <Label>
          <Input
            type="email"
            placeholder="Email"
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          />
          </Label>
          <InlineLabel>
              <StyledText type="body">Attending?</StyledText>
              <Input
                  type="checkbox"
                  checked={isAttending}
                  onChange={(e) => {
                      setIsAttending(e.target.checked);
                      setGuestCount(1);
                  }}
              />
          </InlineLabel>
          <Label>
              <StyledText type="body">Number of guests:</StyledText>
              <Input
                  type="number"
                  value={guestCount}
                  pattern="[0-9]{10}"
                  onChange={(e) => setGuestCount(Number(e.target.value))}
              />
          </Label>
          <Label>
              <StyledText type="body">Please provide the names of any additional guests.</StyledText>
              <Input
                  type="text"
                  placeholder="Additional guests"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
              />
          </Label>

            {/*{isAttending && (*/}
            {/*    <>*/}
            {/*        <StyledText type="body">Additional Guests?</StyledText>*/}
            {/*        <Input*/}
            {/*            type="checkbox"*/}
            {/*            checked={additionalGuests}*/}
            {/*            onChange={(e) => {*/}
            {/*                setAdditionalGuests(e.target.checked);*/}
            {/*            }}*/}
            {/*        />*/}
            {/*        */}
            {/*    </>*/}
            {/*)}*/}
          {/*{isAttending && additionalGuests && (*/}
          {/*    <>*/}
          {/*      <Label>*/}
          {/*        Number of Guests:*/}
          {/*        <Input*/}
          {/*            type="number"*/}
          {/*            value={guestCount}*/}
          {/*            pattern="[0-9]{10}"*/}
          {/*            onChange={(e) => setGuestCount(Number(e.target.value))}*/}
          {/*        />*/}
          {/*      </Label>*/}
          {/*      <Label>*/}
          {/*        Message:*/}
          {/*        <Input*/}
          {/*            type="text"*/}
          {/*            placeholder="Additional guests"*/}
          {/*            value={message}*/}
          {/*            onChange={(e) => setMessage(e.target.value)}*/}
          {/*        />*/}
          {/*      </Label>*/}
          {/*    </>*/}
          {/*)}*/}
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
  );
};

export default RSVPForm;