import styled from '@emotion/styled';
import emailjs from 'emailjs-com';
import { FC, useEffect, useState, FormEvent } from 'react';
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
  useEffect(() => {
    document.title = 'RSVP';
  }, []);

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isAttending, setIsAttending] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [additionalGuests, setAdditionalGuests] = useState('');
  const [hasAdditionalGuest, setHasAdditionalGuest] = useState(false);

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
          additionalGuests: hasAdditionalGuest ? additionalGuests : "No",
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
        setHasAdditionalGuest(false);
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
        size="3em"
      >
        RSVP
      </StyledText>

      <StyledText
        type="body"
        size="large"
        marginBottom={1}
      >
        Saturday, 26 August, 2023
      </StyledText>

      <StyledText
        type="body"
        size="medium"
      >
        Ceremony @ Bury Town Hall, BL9 0ST
      </StyledText>

      <StyledText
        type="body"
        size="medium"
        marginBottom={1}
      >
        Reception @ The Empire Suite, OL9 6BA
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
          <StyledText 
            type="body"
            size="large"
          >
            Attending?</StyledText>
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
          <StyledText 
            type="body"
            size="large"
          >
            Additional guest?
          </StyledText>
          <FormInput
            type="checkbox"
            name="hasAdditionalGuest"
            id="hasAdditionalGuest"
            checked={hasAdditionalGuest}
            onChange={(e) => setHasAdditionalGuest(e.target.checked)}
          />
        </InlineFormLabel>
        {/* <InlineFormLabel>
          <StyledText 
            type="body"
            size="large"
          >
            Additional guest?
          </StyledText>
          <FormInput
            type="checkbox"
            name="hasAdditionalGuest"
            id="hasAdditionalGuest"
            checked={hasAdditionalGuest}
            onChange={(e) => setHasAdditionalGuest(e.target.checked)}
          />
        </InlineFormLabel> */}
        {hasAdditionalGuest && (
          <FormLabel>
            <StyledText type="body">Please enter the full name of the additional guest.</StyledText>
            <FormInput
              type="text"
              name="additionalGuests"
              id="additionalGuests"
              placeholder="Additional guest (Max. 1)"
              value={additionalGuests}
              onChange={(e) => setAdditionalGuests(e.target.value)}
            />
          </FormLabel>
        )}
        <ButtonWrapper>
          <Button type="submit">Submit</Button>
        </ButtonWrapper>
      </Form>

      <Modal open={successModalOpen} onClose={handleCloseSuccessModal}>
        <ModalContentWrapper>
          <ModalText variant="h5">RSVP Submitted Successfully!</ModalText>
          <ModalText variant="body1">Thank you for your RSVP and we look forward to seeing you at the wedding.</ModalText>
          <CloseButton onClick={handleCloseSuccessModal}>Close</CloseButton>
        </ModalContentWrapper>
      </Modal>

      <Modal open={errorModalOpen} onClose={handleCloseErrorModal}>
        <ModalContentWrapper>
          <ModalText variant="h5">We failed to submit your RSVP</ModalText>
          <ModalText variant="body1">Please contact the wedding host to RSVP manually, we apologize for any inconvenience.</ModalText>
          <CloseButton onClick={handleCloseErrorModal}>Close</CloseButton>
        </ModalContentWrapper>
      </Modal>
    </FormWrapper>
  );
};

export default RSVPForm;
