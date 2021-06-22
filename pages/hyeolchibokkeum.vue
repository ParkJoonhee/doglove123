<template>
    <div>
        <section class="hero is-dark">
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
                <p>멸치볶음(간장)</p>
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
                      <template v-for="pos in tablethyeolchibokkeumMaterialsKeys.length">
                        <tr :key="pos">
                          <td>{{ tablethyeolchibokkeumMaterials[pos - 1] }}</td>
                          <td>{{ tablethyeolchibokkeumvolume[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/멸치볶음(간장).jpg">
                  </figure>
                  <p>
                    1. 깊은 볼에 진간장, 물엿, 황설탕을 섞어 양념장을 준비한다.<br>
                    2. 청양고추는 반 갈라 0.3cm로 송송 썰거나 어슷썰기 한다.<br>
                    3. 프라이팬에 식용유를 두른 후 멸치를 넣고 볶아 비린내를 날린다.<br>
                    <i class="fas fa-greater-than"> </i> Tip. 국멸치를 사용 할 경우 머리를 떼어낸 후 반을 갈라 내장, 가시를 제거한다.<br>
                    <i class="fas fa-greater-than"> </i> Tip. 국멸치보다 큰 멸치를 사용 할 경우 머리, 내장, 가시를 제거한 후 반으로 한번 더 갈라 사용한다.<br>
                    4. 멸치가 볶아지면 프라이팬 한 쪽으로 밀어 둔 후 불을 약하게 줄인다.<br>
                    5. 빈 공간에 만들어 둔 양념장을 넣고 잘 저어가며 설탕이 녹을 때 까지 끓인다.<br>
                    6. 양념장이 보글보글 끓어 전체적으로 거품이 생기면 멸치와 골고루 섞은 후 청양고추를 넣고 볶는다.<br>
                    7. 불을 끈 후 참기름, 통깨를 넣고 섞어 완성한다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger is-light">출처</span>
              <a href="https://youtu.be/EUdt9GjWj5c"
                >백종원의 요리비책 Paik's Cuisine
              </a>
            </div>
          </div><div class="column">
            <article class="message">
              <div class="message-header">
                <p>멸치볶음(고추장)</p>
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
                      <template v-for="pos in tablethyeolchibokkeumMaterialsKeys2.length">
                        <tr :key="pos">
                          <td>{{ tablethyeolchibokkeumMaterials2[pos - 1] }}</td>
                          <td>{{ tablethyeolchibokkeumvolume2[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/멸치볶음(고추장).jpg">
                  </figure>
                  <p>
                    1. 깊은 볼에 고운고추가루, 물엿, 황설탕, 고추장을 섞어 준비한다.<br>
                    2. 청양고추는 반 갈라 0.3cm로 송송 썰거나 어슷썰기 한다.<br>
                    3. 프라이팬에 식용유를 두른 후 멸치를 넣고 볶아 비린내를 날린다.<br>
                    <i class="fas fa-greater-than"> </i> Tip. 국멸치를 사용 할 경우 머리를 떼어낸 후 반을 갈라 내장, 가시를 제거한다.<br>
                    <i class="fas fa-greater-than"> </i> Tip. 국멸치보다 큰 멸치를 사용 할 경우 머리, 내장, 가시를 제거한 후 반으로 한번 더 갈라 사용한다.<br>
                    4. 멸치가 볶아지면 프라이팬 한 쪽으로 밀어 둔 후 불을 약하게 줄인다.<br>
                    5. 빈 공간에 만들어 둔 양념장을 넣고 잘 저어가며 설탕이 녹을 때 까지 끓인다.<br>
                    6. 양념장이 보글보글 끓어 전체적으로 거품이 생기면 멸치와 골고루 섞은 후 청양고추를 넣고 볶는다.<br>
                    7. 불을 끈 후 참기름, 통깨를 넣고 섞어 완성한다
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger is-light">출처</span>
              <a href="https://youtu.be/EUdt9GjWj5c"
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
            const hyeolchibokkeumMaterials = await axios.get('https://raw.githubusercontent.com/ParkJoonhee/doglove123/master/static/hyeolchibokkeumMaterials.json');
            //alert(Object.keys(eomukbokkeum));
            return {
              tablethyeolchibokkeumMaterials: hyeolchibokkeumMaterials.data.materials,
              tablethyeolchibokkeumMaterialsKeys: Object.keys(hyeolchibokkeumMaterials.data.materials),
              tablethyeolchibokkeumvolume: hyeolchibokkeumMaterials.data.volume,
              tablethyeolchibokkeumvolumeKeys: Object.keys(hyeolchibokkeumMaterials.data.volume),
              tablethyeolchibokkeumMaterials2: hyeolchibokkeumMaterials.data.materials2,
              tablethyeolchibokkeumMaterialsKeys2: Object.keys(hyeolchibokkeumMaterials.data.materials2),
              tablethyeolchibokkeumvolume2: hyeolchibokkeumMaterials.data.volume2,
              tablethyeolchibokkeumvolumeKeys2: Object.keys(hyeolchibokkeumMaterials.data.volume2)
			};
        }
    };
</script>