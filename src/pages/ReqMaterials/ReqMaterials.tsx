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
   IonLabel,
   IonCard,
   IonCardHeader,
   IonCardSubtitle,
   IonCardTitle,
   IonCardContent
} from '@ionic/react';
import { add, close } from 'ionicons/icons';
import './ReqMaterials.css';

import RequestMaterialForm from '../../components/RequestmaterialForm/RequestMaterialForm';

import data from './sample.json';

interface IRequestMaterial {
   id: string,
   deliveryDate: string,
   comments?: Array<string>,
   photos?: Array<string>,
   items: string,
   itemsId?: string,
   itemName: string,
   description?: string,
   quantity: number,
   unit: any
}

const ReqMaterials: React.FC = () => {

   console.log(data)
   const [formDisplay, setFormDisplay] = useState<boolean>(false);
   const [reqItems, setReqItems] = useState<any[]>(data);


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
               {reqItems.map((item, i) => (
                  <IonItem key={i}>
                     <IonCard>
                        <IonCardHeader>
                           <IonCardSubtitle>{item.id}</IonCardSubtitle>
                           <IonCardTitle>{item.itemName}</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                           {item.description}
                        </IonCardContent>
                     </IonCard>
                  </IonItem>
               ))}
               <IonItem>
                  <IonCard>
                     <IonCardHeader>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                        <IonCardTitle>Card Title</IonCardTitle>
                     </IonCardHeader>

                     <IonCardContent>
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                     </IonCardContent>
                  </IonCard>
               </IonItem>
            </IonList>

            <RequestMaterialForm formDisplay={formDisplay} />

         </IonContent>
      </IonPage>
   );
};

export default ReqMaterials;
