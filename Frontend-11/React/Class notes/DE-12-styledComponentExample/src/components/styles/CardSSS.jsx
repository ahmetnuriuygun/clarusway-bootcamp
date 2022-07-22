import styled from 'styled-components';

const CardSSS = styled.div`
  display: flex;
  align-items: center;

  background-color: aquamarine;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);



  gap: 2rem;
  padding: 60px;
  flex-direction: ${({ odd }) => odd || "row"};
  img {
    width: 80%;
  }
`;

export default CardSSS;
