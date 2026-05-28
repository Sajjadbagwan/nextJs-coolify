import blumLogo from "@/assets/brands/blum.svg";
import festoolLogo from "@/assets/brands/festool.png";
import lamelloLogo from "@/assets/brands/lamello.png";
import mirkaLogo from "@/assets/brands/mirka.webp";
import wescoLogo from "@/assets/brands/wesco.webp";
import carlisleLogo from "@/assets/brands/carlisle-brass.png";
import reisserLogo from "@/assets/brands/reisser.png";

const map: Record<string, string> = {
  blum: blumLogo,
  festool: festoolLogo,
  lamello: lamelloLogo,
  mirka: mirkaLogo,
  wesco: wescoLogo,
  "carlisle brass": carlisleLogo,
  hafele: carlisleLogo,
  reisser: reisserLogo,
};

export const getBrandLogo = (brand: string): string | undefined =>
  map[brand.toLowerCase()];
