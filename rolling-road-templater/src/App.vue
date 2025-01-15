<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="4">
          <h5>Rolling Road Width</h5>
          <v-number-input v-model="rrWidth" density="compact" control-variant="split"></v-number-input>
          <h5>Rolling Road Length</h5>
          <v-number-input v-model="rrLength" density="compact" control-variant="split"></v-number-input>
          <h5>Axle count</h5>
          <v-number-input :step="1" :min="2" v-model="axleCount" density="compact" control-variant="split"></v-number-input>
          <template v-for="(offset,idx) in offsets">
            <h5>Offset {{ idx+1 }}</h5>
            <v-number-input v-model="offsets[idx]" density="compact" control-variant="split"></v-number-input>
          </template>
        </v-col>
        <v-col cols="8">
          <ModelViewer :offsets="offsets" />
        </v-col>
      </v-row>
      
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const axleCount = ref(3);
const offsets = ref<Number[]>([30,30]);
watch(axleCount, (count) => {
  if (axleCount.value !== Math.floor(count)) {
    axleCount.value = Math.floor(count);
    
  };
  while ((axleCount.value-1) > offsets.value.length) {
      offsets.value.push(30);
    }
  if ((axleCount.value-1) < offsets.value.length) {
    offsets.value.splice(axleCount.value-1);
  }
});


const rrWidth = ref(24.5);
const rrLength = ref(11.2);
</script>
