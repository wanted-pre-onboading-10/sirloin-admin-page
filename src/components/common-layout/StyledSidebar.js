import styled from 'styled-components';

export const DropdownBox = styled.div`
  width: 200px;
  height: 0px;
  cursor: pointer;
`;

export const Opener = styled.button`
  width: 100%;
  height: 40px;
  background: white;
  padding: 0 15px;
  border: 1px solid #b7b7bb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AcordianLi = styled.li`
  list-style: none;
  margin: 16px 0px 16px 8px;
  font-size: 12px;
`;

export const H1 = styled.h1`
  font-size: 16px;
  transition: 0.5s ease;
  color: black;
  padding: 4px 4px 4px 8px;
`;



export const Content = styled.div`
  display: ${props =>
    props.isChecked && props.title === '상품' ? 'block' : 'none'};
  padding: 0px 15px;
  max-height: 200px;
  height: 100px;
  overflow: auto;
  width: 100%;
  background: #f5f5f7;
  color: black;
  border-left: 1px solid #b7b7bb;
  border-right: 1px solid #b7b7bb;
  overflow: hidden;
`;

// export const ContentActive = styled.div`
//   padding: 0px 15px;
//   max-height: 200px;
//   overflow: auto;
//   transition: 0.5s ease;
// `;
