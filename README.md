<h1>tlsnotary e2e demo</h1>

notary server
dapp to verify authdecode halo2 poseidon hashes
webapp to create proofs
halo2 verification in solidity
websockify to enable browsers to break free of their chains and get raw sock() access

after running pnpm dev, open browser and go to: https://local.proof.markets:4173
### Developing

```
pnpm install
pnpm dev
```



### Building

```
pnpm install
pnpm build
cd packages/client/dist
serve
```

### Deploying to Vercel

```
vercel build
vercel deploy --prebuilt
```

Then go to Vercel and promote the development build to production.
