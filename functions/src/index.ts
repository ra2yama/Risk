import { firestore } from "firebase-admin";
import * as functions from "firebase-functions";
const admin =  require("firebase-admin")

admin.initializeApp()

export const createGame = functions.https.onCall((data, context) => {
    firestore().collection("games/").doc(data.name).set({
        name: data.name,
        host: context.auth?.uid 
    })

    return {}
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
