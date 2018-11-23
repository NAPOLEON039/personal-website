<template>
    <div class="projects">
        <div class="content card-deck">
            <div class="card p-2">
                <div class="card-body">
                    <h3 class="card-title">Wikipedia Article Viewer</h3>
                    <p class="card-text">Enter a topic to see if an article on that topic exists on Wikipedia</p>
                    <a href="https://codepen.io/NAPOLEON039/full/boQJOW/" target="_blank" class="btn btn-primary">CodePen</a>
                </div>
            </div>
            <div class="card p-2">
                <div class="card-body">
                    <h3 class="card-title">Note Taker</h3>
                    <p class="card-text">A CLI tool to create and view simple text notes</p>
                    <a href="https://github.com/NAPOLEON039/Note-Taker" target="_blank" class="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div class="card p-2">
                <div class="card-body">
                    <h3 class="card-title">Translator</h3>
                    <p class="card-text">Similar to Google Translate. Type something in a specific language and get it translated to English and vice-versa</p>
                    <a href="https://github.com/NAPOLEON039/word-translator" target="_blank" class="btn btn-primary">GitHub</a>
                </div>
            </div>
            <div class="card p-2">
                <div class="card-body">
                    <h3 class="card-title">Math Quiz</h3>
                    <p class="card-text">A web app with simple math quiz questions</p>
                    <a href="https://github.com/NAPOLEON039/Quiz-App" target="_blank" class="btn btn-primary">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

// <script>
// import { bus } from '@/main.js'
// export default {
//     beforeRouteEnter(to, from, next) {
//         console.log()
//         const content = document.querySelector('.content');
//         bus.$on('navHeight', (height) => {
//             console.log(height);
//             content.style.paddingTop = height + 'px';
//         })
//         next();
//     }
// }
</script>


<style scoped>
.projects {
    height: 100vh;
}
.card {
    padding-top: 10px;
}

.content {
    padding-top: 10px;
}
</style>
