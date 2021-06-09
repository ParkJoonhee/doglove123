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
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        async asyncData() {
            const eomukbokkeum = await axios.get('https://github.com/ParkJoonhee/doglove123/blob/master/assets/eomukbokkeumMaterials.json');
            alert(Object.keys(eomukbokkeum));
        }
    };
</script>