import VerifyPage from "./components/VerifyPage"
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51NbMQgIJRplhYhRik3v9eMB5TXYZAOYtOu3znW8HdWTGQrzcqQKtXGtewECxSVVFPbLWHhtGQ982W8FCO0GhvDxj00TUAmxYjs');



function App() {

  return (
    <>
      <VerifyPage stripePromise={stripePromise} />
    </>
  )
}

export default App
