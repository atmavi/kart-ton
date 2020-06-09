import React from 'react';
import {
   IonItem,
   IonLabel,
   IonInput,
   IonButton,
   IonTextarea,

   IonItemGroup,
   IonItemDivider
} from '@ionic/react';

import './RequestMaterialForm.css';



const RequestMaterialForm: React.FC<{ formDisplay: boolean }> = props => {
   const { formDisplay } = props;
   return (
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
   );
};

export default RequestMaterialForm;
