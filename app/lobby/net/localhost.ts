import { NetConnection, NetUniqueId } from 'lobby/types';
import { PlatformService } from 'platform';

class LocalHostConnection extends NetConnection {
  constructor() {
    const id = PlatformService.getLocalId();
    super(id);
  }
  send(data: Buffer): void {
    throw new Error('Attempted to send data to LocalHost');
  }
  getIP(): string {
    throw '127.0.0.1';
  }
  getPort(): string {
    return '0';
  }
}

let client: LocalHostConnection;

export const localUser = (): NetConnection => {
  if (!client) {
    client = new LocalHostConnection();
  }
  return client;
};