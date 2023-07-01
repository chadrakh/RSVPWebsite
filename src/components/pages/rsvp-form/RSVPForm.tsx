import styled from '@emotion/styled';
import emailjs from 'emailjs-com';
import { FC, FormEvent, useState } from 'react';
import StyledText from "../../common/Texts/StyledText";
import { RSVPData } from '../../../store/consts/types';
import { Button as MuiButton, Modal, Typography } from '@mui/material';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../../store/consts/consts';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  opacity: 90%;
  margin: 4em;
  padding: 2em;
`

const Form = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 55%;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  color: #f7f7f7;
`

const InlineLabel = styled.label`
  display: flex;
  margin-bottom: 1.5em;
  color: #f7f7f7;
`

const Input = styled.input`
  padding: 0.5em;
  width: 100%;
  font-style: italic;
  color: #141414;
`

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
`

const ModalContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2px);
  height: 100%;
  padding: 2em;
`

const ModalText = styled(Typography)`
  color: white;
  text-align: center;
  margin: 1em;
  margin-inline: 5em;
`

const CloseButton = styled(MuiButton)`
  margin-top: 1em;
  font-size: 1.5em;
  color: #ccccb4;
`

const RSVPForm: FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  // const [additionalGuests, setAdditionalGuests] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [additionalGuests, setAdditionalGuests] = useState('');

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      if (name.length > 0) {
        try {
          const guestData: RSVPData = {
              name: name,
              phoneNumber: phoneNumber,
              email: email,
              isAttending: isAttending ? 'Yes' : 'No',
              guestCount: guestCount.toString(),
              additionalGuests: additionalGuests ?? "None",
          };
    
          await emailjs.send(
            EMAILJS_SERVICE_ID, // Service ID
            EMAILJS_TEMPLATE_ID, // Template ID
            guestData,
            EMAILJS_PUBLIC_KEY // Public key
          );
    
          setSuccessModalOpen(true);
          
          setName('');
          setPhoneNumber('');
          setEmail('');
          setIsAttending(false);
          setGuestCount(0);
          setAdditionalGuests('');
        } catch (error) {
          console.error('Email sending failed:', error);
          setErrorModalOpen(true);
        }
      }
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const handleCloseErrorModal = () => {
    setErrorModalOpen(false);
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
                name="name"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
          </Label>
          <Label>
          <Input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber.trim()}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          </Label>
          <Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          />
          </Label>
          <InlineLabel>
              <StyledText type="body">Attending?</StyledText>
              <Input
                  type="checkbox"
                  name="isAttending"
                  id="isAttending"
                  checked={isAttending}
                  onChange={(e) => {
                      setIsAttending(e.target.checked);
                      setGuestCount(1);
                  }}
              />
          </InlineLabel>
          <Label>
              <StyledText type="body">Total number of guests:</StyledText>
              <Input
                  type="number"
                  name="guestCount"
                  id="guestCount"
                  value={guestCount}
                  pattern="[0-9]{10}"
                  onChange={(e) => setGuestCount(Number(e.target.value))}
              />
          </Label>
          <Label>
              <StyledText type="body">Please provide the names of any additional guests.</StyledText>
              <Input
                  type="text"
                  name="additionalGuests"
                  id="additionalGuests"
                  placeholder="Additional guests"
                  value={additionalGuests}
                  onChange={(e) => setAdditionalGuests(e.target.value)}
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

        <Modal open={successModalOpen} onClose={handleCloseSuccessModal}>
        <ModalContentWrapper>
          <ModalText variant="h5">RSVP Submitted Successfully!</ModalText>
          <ModalText variant="body1">Thank you for your RSVP and we look at forward to seeing you at the wedding.</ModalText>
          <CloseButton onClick={handleCloseSuccessModal}>Close</CloseButton>
        </ModalContentWrapper>
        </Modal>

        <Modal open={errorModalOpen} onClose={handleCloseErrorModal}>
        <ModalContentWrapper>
          <ModalText variant="h5">We failed to submit your RSVP</ModalText>
          <ModalText variant="body1">Please contact the wedding host to RSVP manually, we apologise for any incovenience.</ModalText>
          <CloseButton onClick={handleCloseErrorModal}>Close</CloseButton>
        </ModalContentWrapper>
        </Modal>
      </FormWrapper>
  );
};

export default RSVPForm;