<template>
    <div class="codeblock-wrapper">
        <!-- prettier-ignore -->
        <pre>
            <code-highlight language="javascript">
let domain = 'protonmail.com'; <br>
let email = 'jonasriedel' + '@' + domain;
            </code-highlight>
        </pre>
    </div>
</template>

<style scoped>
@import '../styles/components/Codeblock.scss';
</style>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'
import 'vue-code-highlight/themes/duotone-sea.css'
import 'vue-code-highlight/themes/window.css'
export default {
    name: 'Codeblock',
    components: {
        CodeHighlight
    }
}
</script>
