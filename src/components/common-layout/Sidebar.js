import { useState } from 'react';
import './Sidebar.css';

function SideBar() {
  const acordianList = ['상품 리스트', '상품 재고 관리', '상품 등록'];
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div className="dropdown-box">
      <div className="drowBox">
        <div className="opener">
          <h1>First</h1>
        </div>
        <ul className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          deleniti expedita, nesciunt recusandae. Ea nemo laboriosam esse
          ducimus veritatis reprehenderit nisi, odio, ratione voluptates
          incidunt minus aspernatur suscipit officia harum?
        </ul>
      </div>
      <div className="drowBox">
        <div className="opener">
          <h1>Second</h1>
        </div>
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          deleniti expedita, nesciunt recusandae. Ea nemo laboriosam esse
          ducimus veritatis reprehenderit nisi, odio, ratione voluptates
          incidunt minus aspernatur suscipit officia harum?
        </div>
      </div>
      <div className="drowBox">
        <div className="opener">
          <h1>Third</h1>
        </div>
        <div className={isClicked ? 'content content-active' : 'content'}>
          {acordianList}
        </div>
      </div>
      <div className="drowBox">
        <div className="opener">
          <h1>Fourth</h1>
        </div>
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          deleniti expedita, nesciunt recusandae. Ea nemo laboriosam esse
          ducimus veritatis reprehenderit nisi, odio, ratione voluptates
          incidunt minus aspernatur suscipit officia harum?
        </div>
      </div>
    </div>
  );
}

export default SideBar;
