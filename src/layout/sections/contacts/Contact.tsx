import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field id="name" placeholder="Name" autoComplete="true" />
        <Field id="surname" placeholder="Name" />
        <Field id="text" as="textarea" rows={10} placeholder="Message" />
        <Button type="submit">Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: lightcyan;
`;

const StyledForm = styled.form`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: min(540px, 100%);
  button {
    align-self: center;
  }
`;

const Field = styled.input``;

