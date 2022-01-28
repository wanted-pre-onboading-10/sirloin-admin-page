import styled from 'styled-components';

function TopLogo() {
  return <Opener>Solion</Opener>;
}
const Opener = styled.div`
  width: 100%;
  height: 40px;
  background: white;
  padding: 0 15px;
  border: 1px solid #b7b7bb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default TopLogo;
