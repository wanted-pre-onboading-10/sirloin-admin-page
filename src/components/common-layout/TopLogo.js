import styled from 'styled-components';

function TopLogo() {
  const logoURL =
    'https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo.png';
  return (
    <Opener>
      <Logo alt="logo" src={logoURL} />
    </Opener>
  );
}
const Opener = styled.div`
  width: 100%;
  height: 50px;
  max-width: 1400px;
  background: white;
  padding: 0 15px;
  border: 1px solid #b7b7bb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
  height: 30px;
`;

export default TopLogo;
