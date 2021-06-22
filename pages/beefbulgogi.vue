<template>
    <div>
        <section class="hero is-white">
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
                <p>소불고기</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="notification">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr class="is-selected">
                            <th>재료 <small>(4인분 기준)</small></th>
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
                      <template v-for="pos in tablebeefbulgogimaterialsKeys.length">
                        <tr :key="pos">
                          <td>{{ tablebeefbulgogimaterials[pos - 1] }}</td>
                          <td>{{ tablebeefbulgogivolume[pos - 1] }}</td>
                          <td>{{ tablebeefbulgogimaterials2[pos - 1] }}</td>
                          <td>{{ tablebeefbulgogivolume2[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/소불고기.jpg">
                  </figure>
                  <p>
                    1. 깊은 볼에 한입 크기로 자른 소고기를 넣고 잘 풀어서 준비한다.<br>
                    2. 소고기에 황설탕, 물엿, 간 마늘을 넣고 골고루 버무려 약 10~20분 정도 재운다. <br>
                    <i class="fas fa-greater-than"> </i> Tip: 설탕의 분자가 다른 양념류보다 크기 때문에 가장 먼저 넣어서 단맛을 배게 한다.<br>
                    3. 표고버섯은 기둥을 제거하고 두께 0.3cm 정도로 얇게 썬다.<br>
                    4. 대파, 홍고추는 두께 0.5cm 정도로 어슷썰어 준비한다.<br>
                    5. 양파는 꼭지를 제거하고 두께 0.5cm 정도로 채썰어 준비한다.<br>
                    6. 재워둔 소고기에 진간장을 넣고 고기가 부서지지 않도록 조심히 섞어준 후 양파, 대파, 홍고추, 표고버섯을 넣어 섞는다.<br>
                    7. 채소 위에 후춧가루, 참기름을 넣고 섞는다.<br>
                    <i class="fas fa-greater-than"> </i> Tip: 다음날 사용한다면 대파만 넣어서 냉장 보관하여 사용 당일 나머지 채소를 넣어 조리한다.<br>
                    8. 팬을 강 불에 올려 예열하고 소불고기를 올려 재료를 집게나 젓가락으로 잘 풀어주면서 볶는다.<br>
                    <i class="fas fa-greater-than"> </i> Tip: 기호에 따라 MSG 1/4큰술 정도를 넣어 볶는다.<br>
                    9. 완전히 익은 소불고기를 접시에 담고 통깨를 뿌려 완성한다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger">출처</span>
              <a href="https://youtu.be/nVzwOOJLt24">백종원의 요리비책 Paik's Cuisine
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
            const beefbulgogiMaterials = await axios.get('https://raw.githubusercontent.com/ParkJoonhee/doglove123/master/static/beefbulgogiMaterials.json');
            //alert(Object.keys(eomukbokkeum));
            return {
              tablebeefbulgogimaterials: beefbulgogiMaterials.data.materials,
              tablebeefbulgogimaterialsKeys: Object.keys(beefbulgogiMaterials.data.materials),
              tablebeefbulgogivolume: beefbulgogiMaterials.data.volume,
              tablebeefbulgogivolumeKeys: Object.keys(beefbulgogiMaterials.data.volume),
              tablebeefbulgogimaterials2: beefbulgogiMaterials.data.materials2,
              tablebeefbulgogimaterialsKeys2: Object.keys(beefbulgogiMaterials.data.materials2),
              tablebeefbulgogivolume2: beefbulgogiMaterials.data.volume2,
              tablebeefbulgogivolumeKeys2: Object.keys(beefbulgogiMaterials.data.volume2)
			      };
        }
    };
</script>