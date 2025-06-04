import { User } from "../../entities";
import { DeviceRegister } from "../common";

export type QuickGuestRegisterRequest = {
  email: string;
  name: string;
  phone: string;
  whatsapp: string;
} & DeviceRegister;

export type QuickGuestRegisterResponse = {
  token: string;
  user: User;
};
