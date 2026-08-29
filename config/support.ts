export const supportConfig = {
  series: {
    title: "Asmaul Husna Series",
    currentEpisode: 28,
    totalEpisodes: 99,
  },
  instagramUrl: "https://www.instagram.com/naufalnabila_/",
} as const;

export type SupportMethod =
  | {
      id: "bsi" | "bca" | "ovo" | "shopeepay";
      type: "bank" | "wallet";
      label: string;
      accountNumber: string;
      accountName: string;
      enabled: boolean;
    }
  | {
      id: "qris";
      type: "qris";
      label: "QRIS";
      imageSrc: string;
      enabled: boolean;
    };

// Add the public receiving details, then set enabled to true to show a method.
// Never place PINs, OTPs, passwords, cards, or other sensitive credentials here.
export const supportMethods: readonly SupportMethod[] = [
  { id: "bsi", type: "bank", label: "BSI", accountNumber: "", accountName: "", enabled: false },
  { id: "bca", type: "bank", label: "BCA", accountNumber: "", accountName: "", enabled: false },
  { id: "ovo", type: "wallet", label: "OVO", accountNumber: "", accountName: "", enabled: false },
  { id: "shopeepay", type: "wallet", label: "ShopeePay", accountNumber: "", accountName: "", enabled: false },
  { id: "qris", type: "qris", label: "QRIS", imageSrc: "/support/qris.webp", enabled: false },
];
