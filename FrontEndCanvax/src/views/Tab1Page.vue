<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense"></ion-header>
      <ExploreContainer name="Tab 1 page" />
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
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonCol, IonGrid, IonRow, IonPage, IonHeader, IonContent } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
  });
</script>

<style scoped>
  ion-col {
    background-color: #63035b;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>