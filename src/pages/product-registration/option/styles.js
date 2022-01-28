import styled from 'styled-components';

const Section = styled.section`
  width: 875px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: Arial;
  background-color: #efefef;
  text-align: right;
`;

const SectionTitle = styled.h2`
  padding: 1rem;
  font-weight: 900;
  color: #000;
  font-size: 1.1rem;
`;

const SectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputText = styled.input`
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: ${props => props.width || 'calc(100% - 20px)'};
  margin: ${props => props.margin || 10}px;
`;

const Select = styled.select`
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
`;

const InitOption = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
`;

const Tab = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: ${props => props.padding || 10}px;
  margin: 10px;
  margin-top: 0px;
  text-align: left;
`;

const Table = styled.div`
  margin: 10px;
  width: calc(100% - 20px);
`;

const RowTitle = styled.div`
  width: 200px;
`;
const Row = styled.div`
  width: ${props => props.width || 'auto'};
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;

const TabTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const OptionBox = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0px;
  font-size: 13px;
`;

const CenterBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OptionBoxTop = styled.div`
  text-align: right;
`;

const SubOptionBox = styled.div`
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
`;

const SubOptionTree = styled.img`
  position: absolute;
  width: 35px;
  margin: 3px 10px;
`;

const OptionImage = styled.div`
  width: inherit;
  height: 250px;
  background: '#d2d2d2';
`;

const OptionImageInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const OptionInputLabel = styled.label`
  display: inline-block;
  padding: 0.5em;
  width: 100%;
  height: 250px;
  color: #000;
  line-height: normal;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ebebeb;
  background: ${props => props.src || '#EEEFEE'};
  background-size: cover;
  background-repeat: no-repeat;
`;

const OptionInputButton = styled.span`
  position: relative;
  top: 50%;
  transform: translateX(-50%);
  padding: 0.7rem 30px;
  border: 1px solid #2000ae;
  border-radius: 5px;
`;

const CommonSquareBtn = styled.button`
  width: ${props => props.width || 'auto'};
  padding: 1rem;
  height: inherit;
  background-color: ${props => props.back || '#fff'};
  border: 1px solid #2000ae;
  border-radius: 5px;
  margin-top: ${props => props.marginTB || 0}px;
  margin-bottom: ${props => props.marginTB || 0}px;
  margin-left: ${props => props.marginLR || 0}px;
  margin-right: ${props => props.marginLR || 0}px;
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
  border: 1px solid ${props => props.color || 'red'};
  border-radius: 5px;
  background-color: #fff;
  color: ${props => props.font || 'red'};
  margin: ${props => props.margin || 10}px;
  margin-top: ${props => props.marginTB || 10}px;
  margin-top: ${props => props.marginTB || 10}px;
`;

const PlusButton = styled.button`
  margin: 0 0 10px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 30px;
  font-size: 25px;
  background-color: #fff;
`;

const PlusButtonLabel = styled.span`
  position: relative;
  bottom: 3px;
  left: 10px;
`;

const DiscountRate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 3px;
`;

export {
  Section,
  SectionTop,
  SectionTitle,
  Title,
  Tab,
  Table,
  Row,
  RowTitle,
  TabTop,
  CommonSquareBtn,
  CommonBtn,
  DeleteBtn,
  InitOption,
  OptionBox,
  OptionBoxTop,
  SubOptionBox,
  CenterBox,
  SubOptionTree,
  OptionImage,
  OptionImageInput,
  OptionInputLabel,
  OptionInputButton,
  PlusButton,
  PlusButtonLabel,
  InputText,
  InputBox,
  Select,
  DiscountRate,
};
