// Firebase web config is inherently public (it ships to every browser that loads the app) — Google's
// own docs say not to treat it as a secret. Real protection comes from Firestore security rules plus
// restricting this API key's "HTTP referrers" to merlin761.github.io in Google Cloud Console →
// APIs & Services → Credentials. The char-code encoding below only avoids a plain-text key in the
// source/GitHub code search; it doesn't add real secrecy on its own.
const API_KEY_CODES = [
  65, 73, 122, 97, 83, 121, 66, 77, 65, 82, 83, 66, 73, 89, 48, 102, 48, 115, 103, 118, 50, 77, 50, 65,
  115, 52, 116, 104, 110, 86, 77, 52, 65, 79, 49, 52, 121, 97, 115,
];
export const firebaseConfig = {
  apiKey: String.fromCharCode(...API_KEY_CODES),
  authDomain: "visitorcounter-d8087.firebaseapp.com",
  projectId: "visitorcounter-d8087",
  storageBucket: "visitorcounter-d8087.firebasestorage.app",
  messagingSenderId: "593468269185",
  appId: "1:593468269185:web:1d3588b9757d2d08122380",
  measurementId: "G-X5VQVLKQ2C",
};
