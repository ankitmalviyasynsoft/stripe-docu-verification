# Name of sample

An [Express server](http://expressjs.com) implementation

## Requirements

- Node v10+
- [Configured .env file](../README.md)

## How to run

1. Install dependencies

```
npm install
```

2. Run the application

```
npm start
```

3. Go to `localhost:4242` to see the demo












# Stripe keys
# https://dashboard.stripe.com/test/apikeys
STRIPE_PUBLISHABLE_KEY=pk_test_51NbMQgIJRplhYhRik3v9eMB5TXYZAOYtOu3znW8HdWTGQrzcqQKtXGtewECxSVVFPbLWHhtGQ982W8FCO0GhvDxj00TUAmxYjs
STRIPE_SECRET_KEY=sk_test_51NbMQgIJRplhYhRiYgHJ502htzjRcS8EWS4h0B2jXHjBaW3MyB1kiXGfGSVhiQSHdrUxmSqMTvosmiUu2YbP2bkE00J8Cvm0NL

# https://stripe.com/docs/webhooks#verify-events
STRIPE_WEBHOOK_SECRET=whsec_1234

# Environment variables
STATIC_DIR=../client