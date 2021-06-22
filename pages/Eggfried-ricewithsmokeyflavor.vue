<template>
    <div>
        <section class="hero is-info">
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
                <p>불맛 달걀볶음밥</p>
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
                      <template v-for="pos in tabletteokbokkeumbapMaterialsKeys.length">
                        <tr :key="pos">
                          <td>{{ tabletteokbokkeumbapMaterials[pos - 1] }}</td>
                          <td>{{ tabletteokbokkeumbapvolume[pos - 1] }}</td>
                          <td>{{ tabletteokbokkeumbapMaterials2[pos - 1] }}</td>
                          <td>{{ tabletteokbokkeumbapvolume2[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/불맛달걀볶음밥.jpg">
                  </figure>
                  <p>
                    1. 대파는 송송 썰어 준비한다.<br>
                    2. 프라이팬에 식용유, 대파를 넣어 파 기름을 내고 노릇해지면 한쪽으로 몰아둔다.<br>
                    3. 다른 한쪽에 달걀을 넣어 스크램블 한다.<br>
                    4. 재료가 없는 쪽에 간장을 넣어 눌어붙도록 끓여주고 스크램블 한 달걀, 볶은 대파와 섞어준다.<br>
                    5. 달걀, 대파가 골고루 섞이면 맛소금, 밥을 넣고 불을 끈 후 국자를 이용하여 섞어준다.<br>
                    6. 밥이 골고루 섞이면 센 불에 올려 볶는다. <br>
                    7. 기호에 따라 MSG를 넣어 볶은 후 완성한다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger is-light">출처</span>
              <a href="https://youtu.be/kR77WlHRZrs"
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
            const tteokbokkeumbap = await axios.get('https://raw.githubusercontent.com/ParkJoonhee/doglove123/master/static/Eggfried-ricewithsmokeyflavorMaterials.json');
            //alert(Object.keys(eomukbokkeum));
            return {
              tabletteokbokkeumbapMaterials: tteokbokkeumbap.data.materials,
              tabletteokbokkeumbapMaterialsKeys: Object.keys(tteokbokkeumbap.data.materials),
              tabletteokbokkeumbapvolume: tteokbokkeumbap.data.volume,
              tabletteokbokkeumbapvolumeKeys: Object.keys(tteokbokkeumbap.data.volume),
              tabletteokbokkeumbapMaterials2: tteokbokkeumbap.data.materials2,
              tabletteokbokkeumbapMaterialsKeys2: Object.keys(tteokbokkeumbap.data.materials2),
              tabletteokbokkeumbapvolume2: tteokbokkeumbap.data.volume2,
              tabletteokbokkeumbapvolumeKeys2: Object.keys(tteokbokkeumbap.data.volume2)
			};
        }
    };
</script>