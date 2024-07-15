export interface Gateway {
  serial_number: string;
  name: string;
  ip_address: string;
  devices: Device[];
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export interface Device {
  vendor: string;
  status: string;
  dateCreated: Date;
  uid: string;
}
