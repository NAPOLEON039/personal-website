<template>
    <div class="projects">
        <div class="content d-flex flex-column align-items-center">
            <div class="card p-2">
                <div class="card-body">
                    <h3 class="card-title">Wikipedia Article Viewer</h3>
                    <p class="card-text">Enter a topic to see if an article on that topic exists on Wikipedia</p>
                    <a href="https://codepen.io/NAPOLEON039/full/boQJOW/" target="_blank" class="btn btn-primary">CodePen</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bus } from '@/main.js'
export default {
    beforeRouteEnter(to, from, next) {
        console.log()
        const content = document.querySelector('.content');
        bus.$on('navHeight', (height) => {
            console.log(height);
            content.style.paddingTop = height + 'px';
        })
        next();
    }
}
</script>


<style scoped>
.projects {
    height: 100vh;
}
.card {
    width: 18rem;
}
</style>
