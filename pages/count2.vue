<template>
  <div>
    {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <button @click="sid+=`!!`">-</button>
    <br>
    <p>{{ sid }}</p>
  </div>
</template>

<script setup>
const counter = useState('counter', () => Math.round(30 * 1000));
const sid = useState('wade', () => "texxxxx");
</script>
