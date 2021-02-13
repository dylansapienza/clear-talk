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

function Login(props){
    return(
        <IonApp>
            <IonCard>
                <IonCardTitle>Login</IonCardTitle>
            </IonCard>
        </IonApp>
    );
}

export default Login;