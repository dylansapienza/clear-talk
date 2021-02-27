import React, { useState } from "react";
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
    IonMenu,
    IonList,
    IonItem,
    IonSlider,
    IonLabel,
    IonInput,
    IonToggle,
    IonRadio,
    IonCheckbox,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonAvatar,
    IonModal,
    IonFab,
    IonFabButton,
    IonProgressBar,
    IonIcon,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonVirtualScroll,
    IonItemDivider,
    IonThumbnail,
    IonTextarea,
    IonRange,
  } from "@ionic/react";
  import "@ionic/core/css/ionic.bundle.css";

  function ChatMessage(props){
    console.log(props);
  
  return(
    <IonCard>
        <IonCardSubtitle>
            {props.message.text}
        </IonCardSubtitle>
    </IonCard>
  );

}

export default ChatMessage;