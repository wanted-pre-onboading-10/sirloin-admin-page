import propTypes from 'prop-types';
import { getIdx } from 'pages/product-registration/option/utils';

function SpecsBox({ productInfo, setProductInfo }) {
  const addProductInfo = () => {
    setProductInfo([
      ...productInfo,
      {
        info: [
          {
            title: '제품명 / 중량',
            placeholder: '제품명 / 중량을 입력해 주세요.',
            state: '',
          },
          {
            title: '원산지 / 원재료 함량',
            placeholder: '원산지 / 원재 함량을 입력해 주세요.',
            state: '',
          },
          {
            title: '등급',
            placeholder: '등급 (근내지방도 수치)를 입력해 주세요.',
            state: '',
          },
          {
            title: '보관',
            placeholder: '보관 방식을 입력해 주세요.',
            state: '',
          },
          {
            title: '식품 유형',
            placeholder: '식품 유형을 입력해 주세요. (ex) 포장육',
            state: '',
          },
        ],
        other: [
          {
            title: '',
            state: '',
          },
        ],
      },
    ]);
  };

  const removeProductInfo = e => {
    const info = [...productInfo];

    info.splice(e.target.value, 1);
    setProductInfo(info);
  };

  const addOtherInfo = e => {
    const info = [...productInfo];

    info[e.target.value].other = info[e.target.value].other.concat({
      title: '',
      state: '',
    });
    setProductInfo(info);
  };

  const removeOtherInfo = e => {
    const info = [...productInfo];
    const idx = getIdx(e.target.value);

    info[idx[0]].other.splice(idx[1], 1);
    setProductInfo(info);
  };

  const saveInfo = (infoIdx, idx, e) => {
    const info = [...productInfo];

    info[infoIdx].info[idx].state = e.target.value;
    setProductInfo(info);
  };

  const saveOtherInfo = (infoIdx, idx, e) => {
    const info = [...productInfo];

    info[infoIdx].other[idx].state = e.target.value;
    setProductInfo(info);
  };

  const saveOtherInfoTitle = (infoIdx, idx, e) => {
    const info = [...productInfo];

    info[infoIdx].other[idx].title = e.target.value;
    setProductInfo(info);
  };

  return (
    <div>
      {productInfo.map((info, infoIdx) => (
        <div key={(info, infoIdx)}>
          <div>
            <span>정보고시 {infoIdx + 1}</span>
            <button type="button" value={infoIdx} onClick={removeProductInfo}>
              삭제
            </button>
          </div>

          {info.info.map((data, idx) => (
            <div key={(data, idx)}>
              <span>{data.title}</span>
              <input
                type="text"
                placeholder={data.placeholder}
                value={data.state}
                onChange={e => saveInfo(infoIdx, idx, e)}
              />
            </div>
          ))}

          {info.other.map((data, idx) => (
            <div key={(data, idx)}>
              <input
                type="text"
                placeholder="항목 제목 자유 입력"
                value={data.title}
                onChange={e => saveOtherInfoTitle(infoIdx, idx, e)}
              />
              <input
                type="text"
                placeholder="내용을 입력해주세요."
                value={data.state}
                onChange={e => saveOtherInfo(infoIdx, idx, e)}
              />
              <button
                type="button"
                value={`${infoIdx}/${idx}`}
                onClick={removeOtherInfo}>
                삭제
              </button>
            </div>
          ))}
          <button type="button" value={infoIdx} onClick={addOtherInfo}>
            + 항목 추가
          </button>
        </div>
      ))}

      <button type="button" onClick={addProductInfo}>
        + 정보고시 추가
      </button>
    </div>
  );
}

SpecsBox.propTypes = {
  productInfo: propTypes.arrayOf(propTypes.object).isRequired,
  setProductInfo: propTypes.func.isRequired,
};

export default SpecsBox;
