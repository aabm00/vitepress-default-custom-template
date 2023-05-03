---
hello: world
---

# Vue 1

{{ 1 + 1 }}

<span v-for="i in 3">{{ i }}</span>

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

import Cmp from '../../components/cmp.vue'

const count = ref(0)
const { page } = useData()

</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<pre>{{ page }}</pre>

<cmp />

<style module>
.button {
  padding: 5px 10px;
  border: solid 1px red;
  color: red;
  font-weight: bold;
}
</style>
