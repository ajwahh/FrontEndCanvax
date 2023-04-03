

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
      </ion-header>
        <ion-list>
          
    
          
          <ion-item>
            <ion-checkbox label-placement="Filip">Label at the Start</ion-checkbox>
          </ion-item>
          
      
        
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonCheckbox } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonCheckbox },
  });
</script>


  