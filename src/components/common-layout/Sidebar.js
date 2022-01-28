import { useState } from 'react';
import {
  DropdownBox,
  Opener,
  AcordianLi,
  H1,
  Content,
} from 'components/common-layout/StyledSidebar';

function SideBar() {
  const acordianList = ['상품 리스트', '상품 재고 관리', '상품 등록'];
  const menuList = [
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
    <DropdownBox>
      {menuList.map(title => (
        <>
          <Opener
            onClick={() => {
              if (title === '상품') setIsChecked(!isChecked);
            }}>
            <H1 className="h1">{title}</H1>
          </Opener>
          <Content isChecked={isChecked} title={title}>
            {acordianList.map(item => (
              <AcordianLi>{item}</AcordianLi>
            ))}
          </Content>
        </>
      ))}
    </DropdownBox>
  );
}

export default SideBar;
