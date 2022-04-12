import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Picture_data from './Picture_data';
import Tools_data from './Tools_data';

function App() {
  let [pics, pics_update] = useState(Picture_data);
  let [tools, tools_update] = useState(Tools_data);

  return (
    <div className="App">
      <header class="masthead d-flex align-items-center">
          <div class="container px-4 px-lg-5 text-center">
              <h1 class="mb-1">임시페이지</h1>
              <h3 class="mb-6"><em>홈페이지 개발 공부 및 취미 생활 기록하려고 만드는 중 입니다. 어느정도 맛만 본 거: CCS, HTML, SQL, Java, Dart, JavaScript, BootStrap, React, Vue, Spring, Node, AndroidStudio, Flutter, MySQL, Firebase, Python</em></h3>
              <a class="btn btn-primary btn-xl" href="#about">더보기</a>
          </div>
      </header>

      
      <section class="content-section bg-light" id="about">
          <div class="container px-4 px-lg-5 text-center">
              <div class="row gx-4 gx-lg-5 justify-content-center">
                  <div class="col-lg-10">
                      <h2>이 페이지는 React로 재구현 할 생각 입니다.</h2>
                      <p class="lead mb-5">
                          자세한 내용은
                          <a href="#contact">개발노트</a>
                          를 참조해주세요
                      </p>
                      <a class="btn btn-dark btn-xl" href="#services">안내</a>
                  </div>
              </div>
          </div>
      </section>

      {/* service */}
      <section class="content-section bg-primary text-white text-center" >
        <div class="container px-4 px-lg-5">
            <div class="content-section-heading">
                <h3 class="text-secondary mb-0">설명</h3>
                <h2 class="mb-5">이 페이지는 아래의 프로그램을 이욯하여 만들었습니다.</h2>
            </div>
            <div class="row gx-4 gx-lg-5">
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-screen-smartphone"></i></span>
                    <h4><strong>{tools[0].title}</strong></h4>
                    <p class="text-faded mb-0">{tools[0].content}</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-pencil"></i></span>
                    <h4><strong>{tools[1].title}</strong></h4>
                    <p class="text-faded mb-0">{tools[1].content}</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                    <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-like"></i></span>
                    <h4><strong>{tools[2].title}</strong></h4>
                    <p class="text-faded mb-0">
                        {tools[2].content}
                    </p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-mustache"></i></span>
                    <h4><strong>{tools[3].title}</strong></h4>
                    <p class="text-faded mb-0">{tools[3].content}</p>
                </div>
            </div>
        </div>
      </section>

      <section class="callout"  id="services">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mx-auto mb-6">
                    취미생활
                    <em>사진</em>
                    이라서 몇장 올려놓고 감상
                </h2>
                <a class="btn btn-primary btn-xl" href="#portfolio">사진</a>
            </div>
        </section>

        {/* portfolio */}
        <section class="content-section" id="portfolio">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading text-center">
                    <h3 class="text-secondary mb-0">사진</h3>
                    <h2 class="mb-5">사진 구도 잡을 줄 모르고, 입문한지도 얼마 안되서 솜씨가 좋진 않습니다.</h2>
                </div>
                <div class="row gx-0">
                  {
                    pics.map((a,i) => {
                      return <Picture_card pics = {pics[i]} i = {i}/>
                    })
                  }
                </div>
            </div>
        </section>


      {/* Git or close */}
      <section class="content-section bg-primary text-white">
          <div class="container px-4 px-lg-5 text-center">
              <h2 class="mb-4">개발노트를 꾸준히 작성하기 위해서 Git으로 기록 중</h2>
              <a class="btn btn-xl btn-light me-4" href="#!">Git 방문</a>
              <a class="btn btn-xl btn-dark" href="#page-top">페이지상단</a>
          </div>
      </section>

      {/* map */}
      <div class="map" id="contact" />

      {/* footer */}
      <Footer/>
    </div>
  );
}

function Service(props) {
  
}

function Picture_card(props) {
  return (
    <div class="col-lg-6">
        <a class="portfolio-item" href="#!">
            <div class="caption">
                <div class="caption-content">
                    <div class="h2">{props.pics.title}</div>
                    <p class="mb-0">{props.pics.content}</p>
                </div>
            </div>
            <img class="img-fluid" src={"assets/img/picture-" + (props.i + 1) + ".jpg"} alt="..." />
        </a>
    </div>
  )
}

function Footer() {
  return (
    <footer class="footer text-center">
        <div class="container px-4 px-lg-5">
            <ul class="list-inline mb-5">
                <li class="list-inline-item">
                    <a class="social-link rounded-circle text-white mr-3" href="#!"><i class="icon-social-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                    <a class="social-link rounded-circle text-white mr-3" href="#!"><i class="icon-social-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                    <a class="social-link rounded-circle text-white" href="#!"><i class="icon-social-github"></i></a>
                </li>
            </ul>
            <p class="text-muted small mb-0">Copyright &copy; choimin1136@gmail.com</p>
        </div>
    </footer>
  )
}

export default App;
