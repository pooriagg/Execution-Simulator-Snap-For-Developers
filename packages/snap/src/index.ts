/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable no-else-return */
import { OnTransactionHandler } from '@metamask/snaps-types';
import { panel, copyable, heading } from '@metamask/snaps-ui';


export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  // Fetch data from "alchemy" api
  const url = "https://eth-sepolia.g.alchemy.com/v2/gBBu3CbLKVl_uci2DmTQ8CMq7Uwdmht1";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      id: 1,
      jsonrpc: "2.0",
      method: "alchemy_simulateExecution",
      params: [ transaction ]
    })
  };
  const { result: execution } = await fetch(url, options).then(res => res.json());

  return {
    content: panel([
      heading("Execution simulation"),
      copyable(JSON.stringify(execution)),
    ])
  };
};