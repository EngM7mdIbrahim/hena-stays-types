export const Platforms = {
  ANDROID: "ANDROID",
  IOS: "IOS",
  WEB: "WEB",
} as const;
export type PlatformsType = keyof typeof Platforms;

export const OSEnum = {
  Windows: "Windows",
  Linux: "Linux",
  MacOS: "MacOS",
  iOS: "iOS",
  Android: "Android",
} as const;
export type OSType = keyof typeof OSEnum;
