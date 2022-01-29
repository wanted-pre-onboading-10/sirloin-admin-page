import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5rem;
  padding: 2rem 1.5rem;
  width: 350px;
  min-height: 150px;
  border-radius: 5px;
  background: #fff;
`;

export const Message = styled.p``;

export const ButtonBox = styled.div`
  align-self: flex-end;
`;
