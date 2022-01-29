# 설로인 제품 등록 페이지

## 과제 정보

이 프로젝트는 다음과 같은 기능을 지원합니다.

- 상품의 노출 및 기한 설정
- 카테고리 지정
- 검색을 통한 상품의 필터 태그 설정
- 정보 등록
  : 상품명, 상품코드, 상품 구성, 상품 정보 고시 등
- 관련 이미지 등록
  : 상품 썸네일, 대표 이미지, 상품 소개 이미지, 구매자 추천 이미지 등
- 관련 옵션 등록
  : 옵션 1개당 여러개의 추가 옵션 상품을 등록 가능
- 관련 날짜 설정
  : 사용자 배송일, 출발일, 예약 배송 등

## 배포

배포 링크: [https://naughty-gates-7d992b.netlify.app/](https://naughty-gates-7d992b.netlify.app/)

## 팀원

- [@2kyung19](https://github.com/2kyung19)
- [@tae100k](https://github.com/tae100k)
- [@wook95](https://github.com/wook95)
- [@hyundonny](https://github.com/hyundonny)

## 기능

### 이미지 첨부 탭

- 해당 탭에서는 이미지 첨부 및 삭제가 가능하며 이미지는 최신순으로 나타납니다.

### 필터 태그 기능 탭

- 필터 검색창 포커스 시 팰터태그에 등록된 모든 필터가 제공됩니다. 이후 사용자가 검색을 시작하면 글자를 기준으로 텍스트 일치값순으로 검색 결과 제공됩니다.
- 지정된 필터값은 하단에 지정된 필터 태그가 표시됩니다.

### 카테고리 탭

- 사용자가 선택한 카테고리가 우측에 표시되며, 다중 선택과 삭제가 가능합니다.

### 옵션 세트 추가 및 상품 수량 병합 기능 탭

- 해당 탭은 (1) 세트 단위로 옵션을 추가한다는 점 (2) 원하는 만큼 세트 옵션을 추가할 수 있다는 점에서 한 가지의 기능으로 묶었습니다.
- 탭 내부에서 옵션 세트 추가/삭제를 할 수 있고, 해당 옵션 내부에서 또 다른 옵션 추가/삭제가 가능합니다.
- 옵션에서 관리되는 재고의 총 합은 총 재고 영역에 반영됩니다.

### 기간 설정 탭

- mui datepicker를 이용하여 상품의 노출 기한 등의 기간을 설정할 수 있습니다.

### 토글 기능 탭

- 라디오 버튼을 통해 출발일 지정 여부, 마일리지 적용 여부 등을 설정할 수 있습니다.

## 로컬 환경 구동

- 프로젝트 클론

```bash
    git clone https://github.com/wanted-pre-onboading-10/sirloin-admin-page
```

- 프로젝트 디렉토리 들어가기

  ```bash
    cd sirloin-admin-page
  ```

- 패키지 설치

  ```bash
      npm install
  ```

- 프로젝트 시작

  ```bash
      npm run start
  ```

## 자료 구조

```bash
    sirloin-admin-page/src
    │
    ├── App.js
    ├── components
    │   ├── common-button
    │   │   └── CommonButton.js
    │   ├── common-input
    │   │   └── CommonIutton.js
    │   ├── common-layout
    │   │    └── Sidebar.js
    │   │    └── StyledSidebar.js
    │   │    └── TopBtn.js
    │   │    └── TopLogo.js
    │   │    └── TotalContainer.js
    │   └── common-tab
    │       └── CommonTab.js
    ├── context
    │   └── product-info-context.js
    ├── index.js
    ├── pages/product-registration
    │   ├── delivery
    │   │   └── delivery.js
    │   │   └── index.js
    │   ├── image-tab
    │   │   └── index.js
    │   │   └── styles.js
    │   ├── information
    │   │    └── product-category
    │   │    └── product-image
    │   │    └── product-intro
    │   │    └── product-name
    │   │    └── product-stock
    │   │    └── product-tags
    │   │    └── index.js
    │   │    └── styles.js
    │   └── misc
    │   │    └── index.js
    │   │    └── misc.js
    │   ├── option
    │   │    └── option-box
    │   │    └── option-img
    │   │    └── option-setbox
    │   │    └── option-subbox
    │   │    └── option-stock
    │   │    └── option-top
    │   │    └── index.js
    │   │    └── styles.js
    │   │    └── utils.js
    │   │    └── option.js
    │   ├── period
    │   │    └── index.js
    │   │    └── period.js
    │   ├── specs
    │   │    └── specs-box
    │   │    └── index.js
    │   │    └── specs.js
    │   ├── index.js
    │   └── productRegistration.js
    └── styles
        ├── GlobalStyles.js
        └── theme.js



```

## 잘한점

### 김태희

- 화살표 함수, 다양한 import export 방식과 같이 기본적인 부분부터 useMemo, useRef와 같이 리액트 훅들에 대해서도 더 공부해보고 사용하며 성장할 수 있는 기회였습니다.

### 문현돈

- 기능 구현을 중심으로 빠르게 맡은 부분을 완료했다.
- 공통된 CSS 스타일을 파악한 후 취합해, 많은 부분에서 CSS 코드를 줄일 수 있었다.
- 문자열을 하드코딩하는 대신, 최대한 constants를 활용하려 노력했다.

### 이경은

- 미리 이슈를 생성하고, 업무를 계획적으로 분장하여 효율적으로 과제를 처리할 수 있었습니다.
- 이슈와 PR을 전략적으로 사용하면서 충돌 없이 병합이 잘 되었습니다.
- 짧은 미팅을 여러번 진행하여, 진행상황을 공유하고, 서로 피드백하면서 빠르게 맡은 부분을 구현할 수 있었습니다.

### 이욱창

- UI 관련해서 많이 시도해 보지 못했던 부분들을 도전해 볼 수 있어서 좋았습니다.
- 통일성 있는 코드를 만들기 위해서 각자 습득해왔던 지식을 나누고, 통일할 수 있어서 좋았습니다.
