<template>
  <div>
    <nav class="breadcrumb">
      <ul>
        <li>
          <nuxt-link to="/"><i class="fas fa-home"></i>홈으로</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/kongnamulbulgogi"><i class="far fa-file"></i>콩나물 불고기</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/eomukbokkeum"><i class="far fa-file"></i>어묵감자볶음</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt/>
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i> 2020-2021, 모든 저작권은 <strong>간단한 생활요리</strong>에 있습니다
      </div>
    </footer>
  </div>
</template>
