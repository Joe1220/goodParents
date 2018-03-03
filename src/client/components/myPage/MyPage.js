import React from 'react';
import "../../public/style/MyPage.css";
import MyPageSidebar from './MyPageSidebar';
import MyPageUpNav from './MyPageUpNav';

class MyPage extends React.Component {

  render() {
    return (
      <div id="mypage_main_wrapper">
        {/* adminpage 상단 navbar */}
        <MyPageUpNav />
        <br />
        {/* adminpage 사이드 navbar */}
        <div>
          <MyPageSidebar />
        </div>
      </div>
    )
  }
}

export default MyPage;
