import { useState } from 'react';
import {
  MenuButton,
  AccordionItem,
  MenuTitle,
  Accordion,
} from 'components/common-layout/StyledSidebar';

function SideBar() {
  const ACCORDION_ITEM_LIST = ['상품 리스트', '상품 재고 관리', '상품 등록'];
  const MENU_TITLE_LIST = [
    '기본 설정',
    '회원',
    '진열',
    '상품',
    '주문',
    '배송',
    '프로모션',
    '혜택',
    '고객 센터 관리',
    '알림',
  ];
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div>
      {MENU_TITLE_LIST.map(menu => (
        <div key={menu}>
          <MenuButton
            onClick={() => {
              if (menu === '상품') setIsChecked(!isChecked);
            }}>
            <MenuTitle className="h1">{menu}</MenuTitle>
          </MenuButton>
          <Accordion isChecked={isChecked} title={menu}>
            {ACCORDION_ITEM_LIST.map(item => (
              <AccordionItem key={item}>{item}</AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
