<template>
  <ion-page>
    <ion-content>
      <ion-list> ... </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>