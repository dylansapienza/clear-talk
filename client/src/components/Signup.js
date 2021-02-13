import React, { useState, useEffect } from "react";
import {
  IonApp,
  IonHeader,
  IonTitle,
  IonCard,
  IonToolbar,
  IonCardContent,
  IonCardTitle,
  IonPage,
  IonContent,
  IonCardHeader,
  IonCardSubtitle,
  IonButton,
  IonText,
  IonLabel,
  IonRow,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";

function Signup(props){
    return(
        <IonApp>
            <IonCard>
                <IonCardTitle>Registration</IonCardTitle>
            </IonCard>
        </IonApp>
    );
}

export default Signup;