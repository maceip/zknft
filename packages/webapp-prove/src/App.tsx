import { useCallback, useEffect, useState } from 'react';
import { prove, verify } from 'tlsn-js';
import { Proof } from 'tlsn-js/build/types';
import tlsnLogo from './assets/tlsn.svg'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{
    time: number;
    sent: string;
    recv: string;
    notaryUrl: string;
  } | null>(null);
  const [proof, setProof] = useState<Proof | null>(null);

  const onClick = useCallback(async () => {
    setProcessing(true);
    const p = await prove('https://example.com', {
      method: 'GET',
      body: '',
      headers: {
      'Accept-Encoding': 'identity',
      'Connection': 'close',
      },
      maxTranscriptSize: 4096,
      notaryUrl: 'https://local.proof.markets:7047',
      websocketProxyUrl: 'wss://local.proof.markets:55688',
    });
    setProof(p);
  }, [setProof, setProcessing]);

  useEffect(() => {
    (async () => {
      if (proof) {
        const r = await verify(proof);
        setResult(r);
        setProcessing(false);
      }
    })();
  }, [proof, setResult]);

  return (
    <>
      <div>
      <a href="https:/" target="_blank">
          <img src={tlsnLogo} className="logo" alt="TLSN logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>tlsn: create a proof demo</h1>
      <div className="card">
      <div>
      <button onClick={!processing ? onClick : undefined} disabled={processing}>
        Click to create a Proof!
      </button>
      <div>
        <b>Proof: </b>
        {!processing && !proof ? (
          <i>not started</i>
        ) : !proof ? (
          <>
            Proving data from example.com...

            Open <i>Developer tools</i> to follow progress
          </>
        ) : (
          <>
            <details>
              <summary>View Proof</summary>
              <pre>{JSON.stringify(proof, null, 2)}</pre>
            </details>
          </>
        )}
      </div>
      <div>
        <b>Verification: </b>
        {!proof ? (
          <i>not started</i>
        ) : !result ? (
          <i>verifying</i>
        ) : (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    </div>
      </div>
   
    </>
  )
}

export default App
