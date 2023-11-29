<template>
<v-list class="d-flex flex-fill hidden-md-and-down" :items="items" nav></v-list>
</template>
<script lang="ts">
export default{
    props: ['items'],
}
</script>