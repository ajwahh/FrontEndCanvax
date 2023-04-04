<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
        <ion-list>
          <ion-item>
            <ion-button>Kontoinformation</ion-button>
          </ion-item>
          <ion-item>
            <ion-button>Språk och tidsformat</ion-button>
          </ion-item>
          <ion-item>
            <ion-button>Byt schema</ion-button>
          </ion-item>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
</script>
