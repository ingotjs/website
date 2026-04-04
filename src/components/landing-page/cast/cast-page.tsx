import { CastDx } from "./dx";
import { CastFeatures } from "./features";
import { CastHero } from "./hero";
import { CastMore } from "./more";
import { CastQuickstart } from "./quickstart";
import { CastShowcase } from "./showcase";
import { CastTrustBar } from "./trust-bar";

export function CastPage() {
  return (
    <>
      <CastHero />
      <CastTrustBar />
      <CastFeatures />
      <CastDx />
      <CastMore />
      <CastShowcase />
      <CastQuickstart />
    </>
  );
}
