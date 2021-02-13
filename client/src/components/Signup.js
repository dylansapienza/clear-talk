import React, { useState } from "react";
import axios from "axios";
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
  IonList,
  IonItem,
  IonInput,
  IonItemDivider,
} from "@ionic/react";
import "@ionic/core/css/ionic.bundle.css";

function postInfo(username, email, password) {
  const p_info = {
    username: username,
    email: email,
    password: password,
  };
  axios
    .post("/account-creation", p_info, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
        window.location.replace(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function AddAccountInfo(props) {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clear Talk</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">
              Account Registration
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent class="ion-text-center ion-text-bold">
            <IonText color="dark">
              Enter your information to create an account
            </IonText>
            <IonList inset="true">
              <IonItem>
                <IonInput
                  value={username}
                  placeholder="Username"
                  required="true"
                  onIonChange={(e) => setUsername(e.detail.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  value={email}
                  inputmode="email"
                  pattern="email"
                  required="true"
                  placeholder="Email Address"
                  onIonChange={(e) => setEmail(e.detail.value)}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  value={password}
                  type="password"
                  required="true"
                  placeholder="Password"
                  onIonChange={(e) => setPassword(e.detail.value)}
                ></IonInput>
              </IonItem>
            </IonList>
          </IonCardContent>

          <IonCardContent>
            <IonButton
              expand="block"
              color="success"
              strong="true"
              onClick={() =>
                postInfo(username, email, password)
              }
            >
              Submit
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
export default AddAccountInfo;