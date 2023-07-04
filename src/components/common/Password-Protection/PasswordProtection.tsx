import styled from '@emotion/styled';
import { FC, ReactNode, useState } from 'react';
import { Form } from '../StyledForm/StyledForm';
import PrimaryButton from '../Buttons/PrimaryButton';
import { SITE_PASSWORD } from '../../../store/consts/consts';

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 1em;
  text-align: center;
`;

const Input = styled.input`
  /* Add your custom CSS styles here */
  border: 1px solid #ccc;
  padding: 0.5em;
  font-size: 1rem;
  /* ...other styles */
`;

type PasswordProps = {
  children: ReactNode;
};

const PasswordProtection: FC<PasswordProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === SITE_PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>; // Render the main content if authenticated
  }

  return (
    <PasswordContainer>
      <Form onSubmit={handlePasswordSubmit}>
        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PrimaryButton type="submit" padding={1}>
          Submit
        </PrimaryButton>
      </Form>
    </PasswordContainer>
  );
};

export default PasswordProtection;