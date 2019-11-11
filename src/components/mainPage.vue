<template>
    <div class="content">
        <h1 class="title">Binary Encryptor</h1>
        <textarea v-model="input" class="textarea" placeholder="Insert input here"></textarea>
        <button class="btn" @click="$emit('encrypt', input)">Encrypt</button>
        <button class="btn" @click="$emit('decrypt', input)">Decrypt</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: ""
        };
    }
};
</script>
