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
   IonInput,
   IonButton,
   IonTextarea,

   IonItemGroup,
   IonItemDivider
} from '@ionic/react';

import { add } from 'ionicons/icons'
import React, { useState } from 'react';
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
   const [showPopover, setShowPopover] = useState(false);


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
                  <IonIcon icon={add} />
               </IonFabButton>
            </IonFab>

            <IonList>
               <IonItem>
                  <IonLabel>Req item 1</IonLabel>
               </IonItem>
            </IonList>


            <form action=""
               className={`
               ion-margin-top
               ${!formDisplay && 'ion-hide'}
               `}>
               <IonItemGroup>
                  <IonItemDivider>
                     <IonLabel>Request Form</IonLabel>
                  </IonItemDivider>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Item Name:
               </IonLabel>
                     <IonInput
                        required
                     ></IonInput>
                  </IonItem>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Item Id:
               </IonLabel>
                     <IonInput
                     ></IonInput>
                  </IonItem>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Item Name:
               </IonLabel>
                     <IonInput
                        required
                     ></IonInput>
                  </IonItem>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Description:
               </IonLabel>
                     <IonInput
                        required
                     ></IonInput>
                  </IonItem>



                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Quantity:
               </IonLabel>
                     <IonInput
                        required
                        type="number"
                     ></IonInput>
                  </IonItem>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Unit:
               </IonLabel>
                     <IonInput
                        required
                     ></IonInput>
                  </IonItem>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Delivery Date:
               </IonLabel>
                     <IonInput
                        required
                        type="date"
                     ></IonInput>
                  </IonItem>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Comment:
               </IonLabel>
                     <IonTextarea
                        required
                        autoGrow={true}
                     ></IonTextarea>
                  </IonItem>

                  <IonItem>
                     <IonLabel
                        position="stacked">
                        Photo:
               </IonLabel>
                     <input type="file" name="" id="" />
                  </IonItem>



               </IonItemGroup>

               <IonButton expand="block" className="ion-margin-top">Send</IonButton>

            </form>
         </IonContent>
      </IonPage>
   );
};

export default ReqMaterials;
