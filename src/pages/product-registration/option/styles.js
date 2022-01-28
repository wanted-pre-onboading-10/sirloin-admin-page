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

const InitOption = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
`;

const OptionSet = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  margin-top: 0px;
  text-align: left;
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
  background-color: #fff;
  border: 1px solid #2000ae;
  border-radius: 5px;
  margin-top: ${props => props.marginTB || 0}px;
  margin-bottom: ${props => props.marginTB || 0}px;
`;

const DeleteBtn = styled.button`
  width: 50px;
  padding: ${props => props.padding || '0.4'}rem;
  border: 1px solid red;
  border-radius: 5px;
  background-color: #fff;
  color: red;
  margin: 10px;
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

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputText = styled.input`
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: ${props => props.width || 'calc(100% - 20px)'};
  margin: 10px;
`;

const Select = styled.select`
  padding: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
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
  DeleteBtn,
  InitOption,
  OptionSet,
  OptionBox,
  OptionBoxTop,
  SubOptionBox,
  CenterBox,
  SubOptionTree,
  OptionImage,
  OptionImageInput,
  OptionInputLabel,
  OptionInputButton,
  CommonSquareBtn,
  PlusButton,
  PlusButtonLabel,
  InputText,
  InputBox,
  Select,
  DiscountRate,
};
