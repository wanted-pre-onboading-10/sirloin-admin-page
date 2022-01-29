import { useState } from 'react';
import SlideToggle from 'components/slide-toggle/slideToggle';
import * as Shared from 'styles/shared';

function Misc() {
  const [isMileageSave, setIsMileageSave] = useState(true);
  const [isGratitudeServe, setIsGratitudeServe] = useState(false);

  return (
    <>
      <Shared.Section>
        <Shared.SectionTitle>상품 혜택 허용 설정</Shared.SectionTitle>
        <Shared.SubSection>
          <Shared.SubSectionTitle>마일리지 적립</Shared.SubSectionTitle>
          <Shared.SubSectionContents>
            <SlideToggle
              checked
              onChange={e => setIsMileageSave(e.target.checked)}
            />
          </Shared.SubSectionContents>
        </Shared.SubSection>
      </Shared.Section>
      <Shared.Section>
        <Shared.SectionTitle>기타 설정</Shared.SectionTitle>
        <Shared.SubSection>
          <Shared.SubSectionTitle>감사카드 제공</Shared.SubSectionTitle>
          <Shared.SubSectionContents>
            <SlideToggle
              onChange={e => setIsGratitudeServe(e.target.checked)}
            />
          </Shared.SubSectionContents>
        </Shared.SubSection>
      </Shared.Section>
    </>
  );
}

export default Misc;
