<template>
    <div>
        <section class="hero is-light">
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
                <p> 두부조림</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="notification">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr class="is-selected">
                            <th>재료</th>
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
                      <template v-for="pos in tabledubujorimmaterialsKeys.length">
                        <tr :key="pos">
                          <td>{{ tabledubujorimmaterials[pos - 1] }}</td>
                          <td>{{ tabledubujorimvolume[pos - 1] }}</td>
                          <td>{{ tabledubujorimmaterials2[pos - 1] }}</td>
                          <td>{{ tabledubujorimvolume2[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/두부조림.jpg">
                  </figure>
                  <p>
                    1. 대파, 청양고추를 두께 0.3cm로 송송 썬다.<br>
                    2. 두부를 반으로 갈라 두께 1cm로 자른다.<br>
                    3. 얇은 팬에 썰어놓은 두부를 깐다.<br>
                    4. 두부가 반쯤 잠기도록  정수물을 붓는다.<br>
                    5. 새우젓, 굵은 고춧가루, 진간장, 황설탕, 간 마늘, 간 생강, 청양고추, 대파를 넣고 졸여준다.<br>
                    (두부가 끓어오르는 양념에 살짝 잠길 수 있게 해준다.)<br>
                    6. 양념장이 반 정도 졸아들면 들기름을 넣어 졸인다.<br>
                    7. 양념장이 자작할 정도까지 졸으면 불을 끄고 접시에 담아 완성한다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger">출처</span>
              <a href="https://youtu.be/Eino3yP-Wk0"
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
            const dubujorimMaterials = await axios.get('https://raw.githubusercontent.com/ParkJoonhee/doglove123/master/static/dubujorimMaterials.json');
            //alert(Object.keys(eomukbokkeum));
            return {
              tabledubujorimmaterials: dubujorimMaterials.data.materials,
              tabledubujorimmaterialsKeys: Object.keys(dubujorimMaterials.data.materials),
              tabledubujorimvolume: dubujorimMaterials.data.volume,
              tabledubujorimvolumeKeys: Object.keys(dubujorimMaterials.data.volume),
              tabledubujorimmaterials2: dubujorimMaterials.data.materials2,
              tabledubujorimmaterialsKeys2: Object.keys(dubujorimMaterials.data.materials2),
              tabledubujorimvolume2: dubujorimMaterials.data.volume2,
              tabledubujorimvolumeKeys2: Object.keys(dubujorimMaterials.data.volume2)
			};
        }
    };
</script>