import styled from '@emotion/styled';
import { FC, FormEvent, useState } from 'react';
import StyledText from "../../common/Texts/StyledText";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141414;
  margin-inline: 10em;
  padding-block: 2em;
  opacity: 90%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  color: #f7f7f7;
`;

const Input = styled.input`
  padding: 5px;
  width: 100%;
  font-style: italic;
  color: #141414;
`;

const Button = styled.button`
  padding: 10px 20px;
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

type RSVPData = {
  name: string;
  telNumber: string;
  isAttending: boolean;
  guestCount: number;
  message: string;
};

const RSVPForm: FC<RSVPFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  // const [additionalGuests, setAdditionalGuests] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      const trimmedName = name.trim();

      if (trimmedName.length > 0) {
          const guestData: RSVPData = {
              name: trimmedName,
              telNumber: telNumber.trim(),
              isAttending,
              guestCount,
              message: message.trim(),
          };

      onSubmit(guestData);

      setName('');
      setTelNumber('');
      setIsAttending(false);
      // setAdditionalGuests(false);
      setGuestCount(0);
      setMessage('');
    }
  };

  return (
      <FormWrapper>
          <StyledText type="header">RSVP</StyledText>
          <StyledText type="body">Saturday, 26 August, 2023</StyledText>
          <StyledText type="body">12:00 PM Ceremony - Bury Hall BL9 0ST</StyledText>
          <Form onSubmit={handleSubmit}>
          <StyledText
              type="header"
              size="small"
          >
            Will you attend?
          </StyledText>
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
            placeholder="Telephone Number"
            value={telNumber.trim()}
            onChange={(e) => setTelNumber(e.target.value)}
          />
          </Label>
          <Label>
              <StyledText type="body">Attending?</StyledText>
              <Input
                  type="checkbox"
                  checked={isAttending}
                  onChange={(e) => {
                      setIsAttending(e.target.checked);
                      setGuestCount(1);
                  }}
              />
          </Label>
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
              <StyledText type="body">Please provide the names of additional guests.</StyledText>
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
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
  );
};

export default RSVPForm;
