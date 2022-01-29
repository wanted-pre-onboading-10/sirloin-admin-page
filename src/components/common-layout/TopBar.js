import styled from 'styled-components';

const logoURL =
  'https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo.png';

function TopBar() {
  return (
    <StyledTopBar>
      <div>
        <img src={logoURL} alt="SirLoin" />
      </div>
    </StyledTopBar>
  );
}

const StyledTopBar = styled.div`
  height: 4.5rem;
  border-bottom: 1px solid #eee;

  & > div {
    height: 100%;
    max-width: 15rem;
    border-right: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5rem;
    padding-left: 2rem;
  }

  img {
    max-width: 100%;
  }
`;

export default TopBar;
