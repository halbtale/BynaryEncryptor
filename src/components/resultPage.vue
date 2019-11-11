<template>
    <div class="content">
        <h1 class="title">Binary Encryptor</h1>
        <textarea class="textarea" disabled v-model="output"></textarea>
        <button class="btn" v-clipboard="output">Copy</button>
        <button class="btn" @click="$emit('received')">Received!</button>
    </div>
</template>

<script>
export default {
    props: ["output"]
};
</script>