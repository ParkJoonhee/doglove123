<template>
    <div>
        <section class="hero is-black">
            <div class="hero-body">
                <p class="title">
                    간단한 생활요리<i class="fas fa-drumstick-bite"></i>
                </p>
                <p class="subtitle">
                    <i class="fas fa-house-user"></i>집에서 간단히 해 먹을 수 있는 생활 요리 레시피<i class="fas fa-scroll"></i>
                </p>
            </div>
        </section>
        <section class="columns">
          <div class="column">
            <article class="message">
              <div class="message-header">
                <p>소고기뭇국</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="notification">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr class="is-selected">
                            <th>재료</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>종류</th>
                            <th>용량</th>
                        </tr>
                    </thead>
                    <tbody>
                      <template v-for="pos in tablebeefandradishsoupMaterialsKeys.length">
                        <tr :key="pos">
                          <td>{{ tablebeefandradishsoupMaterials[pos - 1] }}</td>
                          <td>{{ tablebeefandradishsoupvolume[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/소고기뭇국.jpg">
                  </figure>
                  <p>
                    1. 무는 사방 3cm 정도로 편 썰기 하여 준비한다.<br>
                    2. 소고기는 핏기를 제거하여 준비한다.<br>
                    3. 대파는 송송 썰거나 어슷썰고 양파는 채 썰어 준비한다.<br>
                    4. 냄비에 참기름, 식용유을 두르고 소고기를 넣어 볶는다.<br>
                    5. 고기의 겉면이 익으면 무를 넣어 볶는다.<br>
                    6. 고기가 익으면 물, 간마늘, 국간장, 멸치액젓을 넣고 중불에서 20분 정도 끓인다.<br>
                    7. 소고기가 부드러워지면 양파를 넣어 끓인다.<br>
                    8. 소금으로 간을 맞추고 대파,후추를 넣어 마무리한다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger is-light">출처</span>
              <a href="https://youtu.be/vG07DHeNH9c"
                >백종원의 요리비책 Paik's Cuisine
              </a>
            </div>
          </div><div class="column">
            <article class="message">
              <div class="message-header">
                <p>소고기버섯국</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="notification">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr class="is-selected">
                            <th>재료</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>종류</th>
                            <th>용량</th>
                        </tr>
                    </thead>
                    <tbody>
                      <template v-for="pos in tablebeefandradishsoupMaterialsKeys2.length">
                        <tr :key="pos">
                          <td>{{ tablebeefandradishsoupMaterials2[pos - 1] }}</td>
                          <td>{{ tablebeefandradishsoupvolume2[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/소고기버섯국.jpg">
                  </figure>
                  <p>
                    1. 무는 사방 3cm 정도로 편 썰기 하여 준비한다.<br>
                    2. 소고기는 핏기를 제거하고 양송이버섯은 편 썰어 준비한다.<br>
                    3. 대파는 송송 썰거나 어슷썰고 달걀을 풀어둔다.<br>
                    4. 냄비에 참기름, 식용유을 두르고 소고기를 넣어 볶는다.<br>
                    5. 고기가 반 정도 익으면 무를 넣어 볶는다.<br>
                    6. 고기가 익으면 물1.5L, 간마늘, 국간장, 멸치액젓을 넣고 중불에서 끓여준다.<br>
                    7. 무가 완전히 익으면 무를 건져내고 버섯을 넣어 물을 추가하여 끓인다.<br>
                    8. 소금으로 간을 맞추고 달걀물, 대파를 넣는다.<br>
                    9. 완성그릇에 담은 후 후춧가루를 뿌려 마무리한다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger is-light">출처</span>
              <a href="https://youtu.be/vG07DHeNH9c"
                >백종원의 요리비책 Paik's Cuisine
              </a>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        async asyncData() {
            const beefandradishsoupMaterials = await axios.get('https://raw.githubusercontent.com/ParkJoonhee/doglove123/master/static/beefandradishsoupMaterials.json');
            //alert(Object.keys(eomukbokkeum));
            return {
              tablebeefandradishsoupMaterials: beefandradishsoupMaterials.data.materials,
              tablebeefandradishsoupMaterialsKeys: Object.keys(beefandradishsoupMaterials.data.materials),
              tablebeefandradishsoupvolume: beefandradishsoupMaterials.data.volume,
              tablebeefandradishsoupvolumeKeys: Object.keys(beefandradishsoupMaterials.data.volume),
              tablebeefandradishsoupMaterials2: beefandradishsoupMaterials.data.materials2,
              tablebeefandradishsoupMaterialsKeys2: Object.keys(beefandradishsoupMaterials.data.materials2),
              tablebeefandradishsoupvolume2: beefandradishsoupMaterials.data.volume2,
              tablebeefandradishsoupvolumeKeys2: Object.keys(beefandradishsoupMaterials.data.volume2)
			};
        }
    };
</script>