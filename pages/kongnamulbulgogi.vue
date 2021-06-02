<template>
    <div>
        <section class="hero is-link">
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
                    <p>콩나물 불고기</p>
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
                                <th>양념장</th>
                                <th></th>
                                <th>볶음</th>
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
                          <template v-for="pos in tablekongnamulbulgogistirfryMaterials.length">
                            <tr :key="pos">
                              <td>{{ tablekongnamulbulgogiSauceMaterials[pos - 1] }}</td>
                              <td>{{ tablekongnamulbulgogiSauceVolume[pos - 1] }}</td>
                              <td>{{ tablekongnamulbulgogistirfryMaterials[pos - 1] }}</td>
                              <td>{{ tablekongnamulbulgogistirfryVolume[pos - 1] }}</td>
                            </tr>
                          </template>
                        </tbody>
                      </table>
                    </div>
                    <div class="message-body">
                      <figure>
                        <img src="~/static/콩나물 불고기.jpg">
                      </figure>
                      <p>
                        1. 콩나물은 깨끗하게 세척하여 체에 밭쳐 물기를 제거한다.<br>
                        2. 볼을 준비한 후 진간장, 맛술, 황설탕, 굵은 고춧가루, 고추장, 간마늘을 섞어 양념장을 만든다.<br>
                        3. 양파는 두께 0.5cm 정도로 채 썰어 준비한다.<br>
                        4. 대파는 반 갈라 길이 5cm 정도로 길게 썬다.<br>
                        5. 청양고추는 송송 썰고 깻잎은 세로로 반 자른 후 두께 1cm 정도로 채썰어 뭉쳐진 것을 풀어서 준비한다.<br>
                        6. 넓고 낮은 프라이팬에 콩나물을 깔고 그 위에 대패 삼겹살을 올린다.<br>
                        7. 대패 삼겹살 위에 준비한 대파, 양파, 청양고추, 깻잎을 올려 담는다.<br>
                        8. 양념장을 재료 위에 한바퀴 돌려가며 붓는다.<br>
                        9. 깨소금 적당량을 뿌려 완성한다.<br>
                        10. 완성된 콩나물 불고기를 가스버너에 올려 중 불에 수분이 나올 때까지 기다린다.<br>
                        11. 채소에서 수분이 나오기 시작하면 골고루 뒤적이며 익혀 완성한다.
                      </p>
                    </div>
                </article>
                <div class="content">
                  <span class="tag is-danger">출처</span>
                  <a href="https://youtu.be/iGhOobaQHso"
                    >백종원의 요리비책 Paik's Cuisine</a
                  >
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import kongnamulbulgogiSauceMaterials from "~/assets/kongnamulbulgogiSauceMaterials.json";
    import kongnamulbulgogiSauceVolume from "~/assets/kongnamulbulgogiSauceVolume.json";
    import kongnamulbulgogistirfryMaterials from "~/assets/kongnamulbulgogistirfryMaterials.json";
    import kongnamulbulgogistirfryVolume from "~/assets/kongnamulbulgogistirfryVolume.json";
    export default{
        data() {
            return {
                tablekongnamulbulgogiSauceMaterials : kongnamulbulgogiSauceMaterials.materials,
                tablekongnamulbulgogiSauceVolume : kongnamulbulgogiSauceVolume.volume,
                tablekongnamulbulgogistirfryMaterials : kongnamulbulgogistirfryMaterials.materials,
                tablekongnamulbulgogistirfryVolume : kongnamulbulgogistirfryVolume.volume
            };
        }
    };
</script>