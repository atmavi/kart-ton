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

const handleSubmit = (e: { preventDefault: () => void; }) => {
   e.preventDefault();
   console.log('Form submitted')
}

const RequestMaterialForm: React.FC = () => {
   return (
      <form onSubmit={handleSubmit}
         className='ion-margin-top request-material-form'>
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

         {/* <IonButton
            expand="block"
            className="ion-margin-top"
            color="success">
            Send
         </IonButton> */}

         <input type="submit" value="submit" />

      </form>
   );
};

export default RequestMaterialForm;
