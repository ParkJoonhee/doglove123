<template>
  <div>
    <section class="hero is-danger">
      <div class="hero-body">
        <p class="title">
          간단한 생활요리<i class="fas fa-drumstick-bite"></i>
        </p>
        <p class="subtitle">
          <i class="fas fa-house-user"></i>집에서 간단히 해 먹을 수 있는 생활 요리 레시피<i class="fas fa-scroll"></i>
        </p>
      </div>
    </section>
    <div class="columns">
      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>김치찌개 <i class="fas fa-pepper-hot"></i></p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="notification">
            <table class="table is-striped is-hoverable is-fullwidth">
              <thead>
                <tr class="is-selected">
                  <th>재료 <small>(2인분 기준)</small></th>
                  <th></th><th></th><th></th>
                </tr>
                <tr>
                  <th>종류</th>
                  <th>용량</th>
                  <th>종류</th>
                  <th>용량</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>돼지고기</td>
                  <td>120g</td>
                  <td>쌀뜨물</td>
                  <td>380ml (약 2컵)</td>
                </tr>
                <tr>
                  <td>자른 김치</td>
                  <td>150g</td>
                  <td>다진마늘</td>
                  <td>30g (2큰술)</td>
                </tr>
                <tr>
                  <td>대파</td>
                  <td>30g</td>
                  <td>청양고추</td>
                  <td>10g</td>
                </tr>
                <tr>
                  <td>홍고추</td>
                  <td>10g</td>
                  <td>고운 고춧가루</td>
                  <td>30g (2큰술)</td>
                </tr>
                <tr>
                  <td>굵은 고춧가루</td>
                  <td>30g (2큰술)</td>
                  <td>국간장</td>
                  <td>15ml (1큰술)</td>
                </tr>
                <tr>
                  <td>새우젓</td>
                  <td>15g (1큰술)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="message-body">
            <figure>
              <img src="~static/김치찌개.jpg">
            </figure>
            <p>
              1. 대파와 고추는 송송 썰어 준비합니다.<br>
              2. 냄비에 목살과 쌀뜨물을 넣고 충분히 끓여, 고기 육수를 우려냅니다.<br>
              3. 고기 육수가 충분히 우러나면 김치와 다진마늘을 넣습니다.<br>
              4. 국물이 끓어오르면 대파와 고추를 넣습니다.<br>
              5. 고춧가루를 넣고 잘 섞습니다. 굵은 고춧가루와 고운 고춧가루를 반씩 섞어 넣으면 더욱 좋습니다.<br>
              6. 국간장과 새우젓을 넣고 잘 저어 줍니다.<br>
            </p>
          </div>
        </article>
        <div class="content">
          <span class="tag is-danger is-light">출처</span>
          <a href="https://youtu.be/DnQ09ZZCjCs"
            >백종원의 요리비책 Paik's Cuisine</a
          >
        </div>
      </div>
    </div>
  </div>

</template>