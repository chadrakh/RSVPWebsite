import styled from '@emotion/styled';
import emailjs from 'emailjs-com';
import { FC, FormEvent, useState } from 'react';
import StyledText from "../../common/Texts/StyledText";
import { RSVPData } from '../../../store/consts/types';
import { Button as MuiButton, Modal, Typography } from '@mui/material';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../../../store/consts/consts';
import { Button, ButtonWrapper, Form, FormWrapper, InlineFormLabel, FormInput, FormLabel } from '../../common/StyledForm/StyledForm';

const ModalContentWrapper = styled.div`
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
              size="xx-large"
              padding={0.7}
          >
            Will you attend?
          </StyledText>
          
          <Form onSubmit={handleSubmit}>
          <FormLabel>
            <FormInput
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
          </FormLabel>
          <FormLabel>
          <FormInput
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber.trim()}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          </FormLabel>
          <FormLabel>
          <FormInput
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          />
          </FormLabel>
          <InlineFormLabel>
              <StyledText type="body">Attending?</StyledText>
              <FormInput
                  type="checkbox"
                  name="isAttending"
                  id="isAttending"
                  checked={isAttending}
                  onChange={(e) => {
                      setIsAttending(e.target.checked);
                      setGuestCount(1);
                  }}
              />
          </InlineFormLabel>
          <FormLabel>
              <StyledText type="body">Total number of guests:</StyledText>
              <FormInput
                  type="number"
                  name="guestCount"
                  id="guestCount"
                  value={guestCount}
                  pattern="[0-9]{10}"
                  onChange={(e) => setGuestCount(Number(e.target.value))}
              />
          </FormLabel>
          <FormLabel>
              <StyledText type="body">Please provide the names of any additional guests.</StyledText>
              <FormInput
                  type="text"
                  name="additionalGuests"
                  id="additionalGuests"
                  placeholder="Additional guests"
                  value={additionalGuests}
                  onChange={(e) => setAdditionalGuests(e.target.value)}
              />
          </FormLabel>

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