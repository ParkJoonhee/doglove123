<template>
    <div>
        <section class="hero is-warning">
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
                <p>어묵감자볶음</p>
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
                      <template v-for="pos in tableeomukbokkeummaterialsKeys.length">
                        <tr :key="pos">
                          <td>{{ tableeomukbokkeummaterials[pos - 1] }}</td>
                          <td>{{ tableeomukbokkeumvolume[pos - 1] }}</td>
                          <td>{{ tableeomukbokkeummaterials2[pos - 1] }}</td>
                          <td>{{ tableeomukbokkeumvolume2[pos - 1] }}</td>
                        </tr> 
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="message-body">
                  <figure>
                    <img src="~/static/어묵감자볶음.jpg">
                  </figure>
                  <p>
                      1. 얇은 사각어묵은 길게 2등분 후 두께 2cm로 얇게 썰고, 봉어묵은 1cm정도 두께로 어슷 썰어 준비한다.<br>
                      2. 양파는 가로로 반 갈라 2cm정도 두께로 자른다.<br>
                      3. 대파, 청양고추는 0.3cm두께로 송송 썬다.<br>
                      4. 감자는 십자모양으로 4등분 한 후 0.3cm 두께로 편 썬다.<br>
                      5. 깊은 프라이팬에 어묵, 양파, 대파, 청양고추, 감자, 식용유, 간마늘을 넣고 강 불에 올린다.<br>
                      6. 지글지글 소리가 나기 시작하면 전체적으로 섞일 때 까지 볶은 후 물, 진간장,  황설탕을 넣고 졸인다.<br>
                      <i class="fas fa-greater-than"> </i> Tip. 어묵의 종류나 불 세기에 따라 물양을 조절한다.<br>
                      7. 어묵에 양념장이 배이면 고운고춧가루를 넣고 섞는다.<br>
                      8. 국물이 완전히 졸아들고 윤기가 나면 참기름을 넣고 섞는다.<br>
                      9. 통깨를 뿌린 후 접시에 옮겨 담아 완성한다.<br>
                      <i class="fas fa-greater-than"> </i> Tip. 그릇에 담고나서 통깨를 한번 더 뿌려줘도 좋다.
                  </p>
                </div>
            </article>
            <div class="content">
              <span class="tag is-danger">출처</span>
              <a href="https://youtu.be/mo8ogr40m4o"
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
            const eomukbokkeumMaterials = await axios.get('https://raw.githubusercontent.com/ParkJoonhee/doglove123/master/static/eomukbokkeumMaterials.json');
            //alert(Object.keys(eomukbokkeum));
            return {
              tableeomukbokkeummaterials: eomukbokkeumMaterials.data.materials,
              tableeomukbokkeummaterialsKeys: Object.keys(eomukbokkeumMaterials.data.materials),
              tableeomukbokkeumvolume: eomukbokkeumMaterials.data.volume,
              tableeomukbokkeumvolumeKeys: Object.keys(eomukbokkeumMaterials.data.volume),
              tableeomukbokkeummaterials2: eomukbokkeumMaterials.data.materials2,
              tableeomukbokkeummaterialsKeys2: Object.keys(eomukbokkeumMaterials.data.materials2),
              tableeomukbokkeumvolume2: eomukbokkeumMaterials.data.volume2,
              tableeomukbokkeumvolumeKeys2: Object.keys(eomukbokkeumMaterials.data.volume2)
			};
        }
    };
</script>