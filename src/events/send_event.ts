import WebSocket from 'ws';
import { stringify } from '../utils'
const messageType = 'EVENT';

/** Send an OK message to the client
 * @param {string} args.message
 * @param {string} args.id
 * @param {WebSocket} args.ws
 *
 * @returns {void}
 */
type Args = {
  id: String;
  message: String;
  ws: WebSocket;
};
const sendOk = (args: Args) => {
  const message = [messageType, args.id || '', args.message];
  console.log('Success =>', args.message);

  args.ws.send(stringify(message));
};

export default sendOk;
