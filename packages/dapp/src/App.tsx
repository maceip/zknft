//import { useMUD } from "./MUDContext";
import { prove, verify } from 'tlsn-js';
import { Proof } from 'tlsn-js/build/types';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Watch } from 'react-loader-spinner';

const styleUnset = { all: "unset" } as const;

export const App = () => {
  const [proof, setProof] = useState<Proof | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{
    time: number;
    sent: string;
    recv: string;
    notaryUrl: string;
  } | null>(null);

  /* const {
    network: { tables, useStore },
    systemCalls: { addTask, toggleTask, deleteTask },
  } = useMUD(); */

/*   const tasks = useStore((state) => {
    const records = Object.values(state.getRecords(tables.Tasks));
    records.sort((a, b) => Number(a.value.createdAt - b.value.createdAt));
    return records;
  }); */

  const onClick = useCallback(async () => {
    setProcessing(true);
    const p = await prove('https://example.com', {
      method: 'GET',
      maxTranscriptSize: 1024,
      notaryUrl: 'http://localhost:7047',
      websocketProxyUrl: 'ws://localhost:55688',
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
      <button onClick={!processing ? onClick : undefined} disabled={processing}>
        Start demo
      </button>
      <div>
        <b>Proof: </b>
        {!processing && !proof ? (
          <i>not started</i>
        ) : !proof ? (
          <>
            Proving data from swapi...
            <Watch
              visible={true}
              height="40"
              width="40"
              radius="48"
              color="#000000"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
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
    </>
  );
};
