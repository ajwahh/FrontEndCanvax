<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
       <ion-grid>
         <ion-row>
           <ion-col>Mon</ion-col>
           <ion-col>Tue</ion-col>
           <ion-col>Wed</ion-col>
           <ion-col>Thur</ion-col>
           <ion-col>Fri</ion-col>
           <ion-col>Sun</ion-col>
           <ion-col>Sat</ion-col>
         </ion-row>
       </ion-grid>
     <!-- <ion-datetime first-day-of-week="1"></ion-datetime> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
