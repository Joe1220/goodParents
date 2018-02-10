import React from 'react';
import { Jumbotron } from 'reactstrap';
import "../public/style/Area.css";

export const Area = (props) => {
  return (
    <div>
      <Jumbotron>
        <div className="mx-5" style={{width: 25 + 'em'}}>
          <h3 className="display-5 font-weight-bold">신선한 재료를<br />문 앞에서 만나세요</h3>
          <p className="lead">최대한 신선한 상품을 전하고자<br />
          주문한 다음 날 도착하는 배송을 시작했습니다.<br />
          클릭 한 번으로 기분 좋은 하루를 선물받으세요.</p>
        </div>
      </Jumbotron>
    </div>
  );
};
