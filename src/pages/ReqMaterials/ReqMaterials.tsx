import React, { useState } from 'react';
import {
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
   IonFabButton,
   IonFab,
   IonIcon,
   IonList,
   IonItem,
   IonLabel
} from '@ionic/react';

import RequestMaterialForm from '../../components/RequestmaterialForm/RequestMaterialForm';

import { add, close } from 'ionicons/icons'
import './ReqMaterials.css';

interface IRequestMaterial {
   id: string,
   deliveryDate: string,
   comments?: string,
   photos?: string,
   items: string,
   itemsId?: string,
   itemName: string,
   description?: string,
   quantity: number,
   unit: any
}

const ReqMaterials: React.FC = () => {
   const [formDisplay, setFormDisplay] = useState<boolean>(false);


   function ToggleDisplay() {
      setFormDisplay(!formDisplay);
   }

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Kart-Ton</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent className="ion-padding">
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
               <IonFabButton
                  onClick={ToggleDisplay}>
                  <IonIcon icon={formDisplay ? close : add} />
               </IonFabButton>
            </IonFab>

            <IonList>
               <IonItem>
                  <IonLabel>Req item 1</IonLabel>
               </IonItem>
            </IonList>

            <RequestMaterialForm formDisplay={formDisplay} />

         </IonContent>
      </IonPage>
   );
};

export default ReqMaterials;
