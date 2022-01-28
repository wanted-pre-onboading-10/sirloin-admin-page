import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import * as S from 'pages/product-registration/image-tab/styles';

const click = ref => () => {
  if (ref.current) {
    ref.current.click();
  }
};

function ImageTab({ tabTitle }) {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleFileInputChange = e => {
    const f = e.target.files[0];
    const file = { name: f.name, id: f.name };
    setFiles(prev => [file, ...prev]);
  };

  const deleteFile = e => {
    setFiles(prev => prev.filter(item => item.id !== e.target.name));
  };

  return (
    <S.Section>
      <S.SectionTitle>{tabTitle}</S.SectionTitle>
      <S.SectionContents>
        <div>
          <S.HiddenInput
            type="file"
            accept=".jpg, .png, .jpeg"
            id="image-picker"
            onChange={handleFileInputChange}
            className="hidden"
            ref={inputRef}
          />
          <S.SquareButton type="button" onClick={click(inputRef)}>
            + 이미지 추가
          </S.SquareButton>
        </div>
        <S.ImageList>
          {files.map(file => (
            <S.ImageItem key={file.id}>
              <span>{file.name}</span>
              <S.RoundButton type="button" onClick={deleteFile} name={file.id}>
                X
              </S.RoundButton>
            </S.ImageItem>
          ))}
        </S.ImageList>
      </S.SectionContents>
    </S.Section>
  );
}

ImageTab.propTypes = {
  tabTitle: PropTypes.string.isRequired,
};

export default ImageTab;
