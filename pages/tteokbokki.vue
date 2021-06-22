<template>
    <div>
        <section class="hero is-success">
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
                <p>떡볶이</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="notification">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr class="is-selected">
                            <th>재료</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>볶음</th>
                            <th></th>
                            <th>양념장</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>종류</th>
                            <th>용량</th>
                            <th>종류</th>
                            <th>용량</th>
                        </tr>
                    </thead>
                    <tbody>
                      <template v-for="pos in tabletteokbokkiMaterialsKeys.length">
                        <tr :key="pos">
                          <td>{{ tabletteokbokkiMaterials[pos - 1] }}</td>
                          <td>{{ tabletteokbokkivolume[pos - 1] }}</td>
                          <td>{{ tabletteokbokkiMaterials2[pos - 1] }}</td>
                          <td>{{ tabletteokbokkivolume2[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/떡볶이.jpg">
                  </figure>
                  <p>
                    1. 대파는 어슷 썰거나 반으로 갈라 길게 썰어 준비한다.<br>
                    2. 양배추, 어묵은 먹기 좋은 크기로 썰어 준비한다.<br>
                    3. 냄비에 물, 진간장, 황설탕, 고추장, 굵은고춧가루, 고운고춧가루, 대파, 양배추를 넣어 끓인다.<br>
                    4. 떡볶이떡은 흐르는 물에 가볍게 세척한다.<br>
                    5. 육수가 끓으면 삶은달걀, 떡을 넣고 함께 끓여준다.<br>
                    6. 기호에 맞게 MSG를 넣는다.<br>
                    7. 떡을 넣고 육수가 끓어오르면 어묵을 넣어준다.<br>
                    8. 양념장이 걸쭉하게 졸아들 때까지 끓여 완성한다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger is-light">출처</span>
              <a href="https://youtu.be/t4Es8mwdYlE"
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
            const tteokbokkiMaterials = await axios.get('https://raw.githubusercontent.com/ParkJoonhee/doglove123/master/static/tteokbokkiMaterials.json');
            //alert(Object.keys(eomukbokkeum));
            return {
              tabletteokbokkiMaterials: tteokbokkiMaterials.data.materials,
              tabletteokbokkiMaterialsKeys: Object.keys(tteokbokkiMaterials.data.materials),
              tabletteokbokkivolume: tteokbokkiMaterials.data.volume,
              tabletteokbokkivolumeKeys: Object.keys(tteokbokkiMaterials.data.volume),
              tabletteokbokkiMaterials2: tteokbokkiMaterials.data.materials2,
              tabletteokbokkiMaterialsKeys2: Object.keys(tteokbokkiMaterials.data.materials2),
              tabletteokbokkivolume2: tteokbokkiMaterials.data.volume2,
              tabletteokbokkivolumeKeys2: Object.keys(tteokbokkiMaterials.data.volume2)
			};
        }
    };
</script>