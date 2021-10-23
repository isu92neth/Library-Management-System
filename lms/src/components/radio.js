import styled from "styled-components";
import { Container } from "./CommonComponents";

const Label = styled.label`
  font-size: 0.75em;
`;

const StyledInput = styled.input`
  cursor: pointer;
`;

export default function Radio({ label, value, onChange, ...rest }) {
  return (
    <Container alignItems="flex-start" disableFullWidth>
      <Label>
        {label}
        <StyledInput value={value} onChange={onChange} {...rest} />
      </Label>
    </Container>
  );
}
