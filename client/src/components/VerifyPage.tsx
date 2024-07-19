import React, { useEffect, useState } from 'react'



export default function VerifyPage({ stripePromise }: any) {
  const [stripe, setStripe] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchStripe = async () => {
      const stripeInstance = await stripePromise;
      setStripe(stripeInstance);
    };
    fetchStripe();
  }, [stripePromise]);

  const handleClick = async (event) => {
    event.preventDefault();

    if (!stripe) {
      return;
    }



    const response = await fetch('https://33r6dmbj-4000.inc1.devtunnels.ms/create-verification-session', { method: 'POST' });
    const session = await response.json();

    const { error } = await stripe?.verifyIdentity(session.client_secret);

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('Verification submitted!');
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <>
        <h1>Thanks for submitting your identity document</h1>
        <p>We are processing your verification.</p>
      </>
    );
  }

  return (
    <button role="link" disabled={!stripe} onClick={handleClick}>
      Verify
    </button>
  );
}
