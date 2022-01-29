import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  max-width: 975px;
  border: 1px solid #ddd;
  font-family: Arial;
  background-color: #f7f7f7;
  text-align: right;
`;

const SectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  padding: 1rem;
  font-weight: 500;
  color: #000;
  font-size: 1.1rem;
`;

const CenterBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tab = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: ${props => props.padding || 10}px;
  margin: 10px;
  margin-top: 0px;
  text-align: left;
`;

const TabTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.div`
  margin: 10px;
  width: calc(100% - 20px);
`;

const Row = styled.div`
  width: ${props => props.width || 'auto'};
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;

const RowTitle = styled.div`
  width: 200px;
`;

const InputText = styled.input`
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: ${props => props.width || 'calc(100% - 20px)'};
  margin: ${props => props.margin || 10}px;
`;

const CommonSquareBtn = styled.button`
  width: ${props => props.width || 'calc(100% - 20px)'};
  padding: 1rem;
  height: inherit;
  background-color: ${props => props.back || '#f7f7f7'};
  border: 1px solid #2000ae;
  border-radius: 5px;
  margin: 10px;
`;

const CommonBtn = styled.button`
  padding: 0.8rem;
  width: 150px;
  color: #2000ae;
  background-color: #fff;
  border: 1px solid #ddd;
  margin: 10px 0;
`;

const DeleteBtn = styled.button`
  width: ${props => props.width || 50}px;
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || '0.4'}rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  color: ${props => props.font || 'red'};
  margin: ${props => props.margin || 10}px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

export {
  Section,
  SectionTop,
  SectionTitle,
  CenterBox,
  Tab,
  TabTop,
  Table,
  Row,
  RowTitle,
  InputText,
  CommonSquareBtn,
  CommonBtn,
  DeleteBtn,
  Title,
};
