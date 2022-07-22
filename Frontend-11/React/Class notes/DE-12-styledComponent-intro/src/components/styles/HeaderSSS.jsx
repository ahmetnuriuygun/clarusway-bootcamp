import styled from "styled-components";

const HeaderSSS = styled.h1`
  /* color: ${({ renk }) => (renk ? renk : "hotpink")}; */
  color: ${({ renk }) => renk || "hotpink"};

font-size: 2.5rem;
  margin: 1rem 0;
`;

export default HeaderSSS;
