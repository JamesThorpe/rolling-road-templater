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
          <h5>Offset Mode</h5>
          <v-select
            v-model="offsetMode"
            :items="['individual', 'absolute']"
            density="compact"
          ></v-select>
          <template v-for="(offset, idx) in offsets" :key="idx">
            <h5>Offset {{ idx + 1 }}</h5>
            <v-number-input
              v-model="offsets[idx]"
              density="compact"
              control-variant="split"
              
            ></v-number-input>
          </template>
          <v-btn @click="exportClick">Export STL</v-btn>
        </v-col>
        <v-col cols="8">
          <ModelViewer ref="modelViewer" :offsets="individualOffsets" :rrWidth="rrWidth" :rrLength="rrLength" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import ModelViewer from './components/ModelViewer.vue';

const modelViewer = ref<typeof ModelViewer | null>(null);

function exportClick() {
  modelViewer.value?.exportObject();
}

// Reactive state
const axleCount = ref(3);
const offsets = ref<number[]>([30, 30]);
const rrWidth = ref(24.5);
const rrLength = ref(11.2);
const offsetMode = ref<'individual' | 'absolute'>('individual');

// Computed properties
const individualOffsets = computed(() => {
  if (offsetMode.value === 'individual') {
    return [...offsets.value];
  }
  return offsets.value.map((offset, idx, arr) => (idx === 0 ? offset : offset - arr[idx - 1]));
});

// Watchers
watch(axleCount, (count) => {
  const newCount = Math.floor(count);
  axleCount.value = newCount;

  while (offsets.value.length < newCount - 1) {
    if (offsetMode.value === 'absolute') {
      offsets.value.push(offsets.value[offsets.value.length - 1] + 30);
    } else {
      offsets.value.push(30);
    }
  }
  if (offsets.value.length > newCount - 1) {
    offsets.value.splice(newCount - 1);
  }
});

watch(offsetMode, (newMode, oldMode) => {
  if (newMode === oldMode) return;

  if (newMode === 'absolute') {
    // Convert to absolute offsets
    offsets.value = offsets.value.reduce<number[]>((acc, offset, idx) => {
      acc.push(idx === 0 ? offset : acc[idx - 1] + offset);
      return acc;
    }, []);
  } else {
    // Convert to individual offsets
    offsets.value = offsets.value.map((offset, idx, arr) =>
      idx === 0 ? offset : offset - arr[idx - 1]
    );
  }
});
</script>
