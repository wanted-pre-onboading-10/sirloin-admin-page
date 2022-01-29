import { useState, useRef, cloneElement } from 'react';
import PropTypes from 'prop-types';

import * as S from 'components/image-input/styles';

const click = ref => () => {
  if (ref.current) {
    ref.current.click();
  }
};

function ImageInput({ children }) {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);

  const handleFileInputChange = e => {
    const targetFile = e.target.files[0];
    const newFile = targetFile.name;
    if (!files.includes(newFile)) {
      setFiles(prev => [newFile, ...prev]);
    }
  };

  const deleteFile = e => {
    setFiles(prev => prev.filter(item => item !== e.target.name));
  };

  return (
    <>
      <div>
        <S.HiddenInput
          type="file"
          accept=".jpg, .png, .jpeg"
          id="image-picker"
          onChange={handleFileInputChange}
          className="hidden"
          ref={inputRef}
        />
        {children && cloneElement(children, { onClick: click(inputRef) })}
      </div>
      <S.ImageList>
        {files.map(file => (
          <S.ImageItem key={file}>
            <span>{file}</span>
            <S.RoundButton type="button" onClick={deleteFile} name={file}>
              X
            </S.RoundButton>
          </S.ImageItem>
        ))}
      </S.ImageList>
    </>
  );
}

ImageInput.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ImageInput;
