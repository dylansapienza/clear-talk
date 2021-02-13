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

function Home(props) {
  const [error, setError] = useState("");

  function getError() {
    const query = new URLSearchParams(props.location.search);
    const error = query.get("error");
    if (error !== "") {
      setError(error);
    }
  }

  useEffect(() => {
    getError();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Clear Talk
            </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle class="ion-text-center"><div class="typewriter">
                <h1>Clear Talk: Personal Chats</h1>
            </div></IonCardTitle>
          </IonCardHeader>

          <IonCardContent class="ion-text-center ion-text-bold">
            <IonText color="dark">
              Clear Talk is a small web-based chat app for personal communications.
            </IonText>
            <hr></hr>
            <IonText color="danger">
              <i>{error}</i>
            </IonText>
            <IonButton
              href="/signup"
              expand="block"
              color="success"
              strong="true"
            >
              Sign Up
            </IonButton>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <IonText color="dark">
              <h2>Already have an account?</h2>
            </IonText>
            <hr></hr>
            <IonButton
              href="/login"
              expand="block"
              color="primary"
              strong="true"
            >
              Login
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
export default Home;