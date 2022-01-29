import styled from 'styled-components';

export const MenuButton = styled.button`
  width: 100%;
  background-color: transparent;
  padding: 0;
  padding-left: 2rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  border: none;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  text-align: left;
  cursor: pointer;
  font-weight: 500;
`;

export const AccordionItem = styled.li`
  font-size: 0.9rem;
  padding-left: 2.2rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  background: #f5f5f7;

  &:hover {
    background-color: #ebebf2;
  }
`;

export const MenuTitle = styled.h1`
  font-size: 1rem;
  transition: 500ms ease;
`;

export const Accordion = styled.div`
  display: ${props =>
    props.isChecked && props.title === '상품' ? 'block' : 'none'};
  width: 100%;
  overflow: hidden;
`;
