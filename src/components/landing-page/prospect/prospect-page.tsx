import type { PmName } from "../../../lib/pkg-config";
import { ProspectFeatures } from "./features";
import { ProspectHero } from "./hero";
import { ProspectQuickstart } from "./quickstart";
import { ProspectShowcase } from "./showcase";
import { ProspectTrustBar } from "./trust-bar";

type ProspectPageProps = {
  activePm: PmName;
  onPmSwitch: (pm: PmName) => void;
  pmBin: string;
  pmArgs: string;
  pmFullCmd: string;
};

export function ProspectPage({ activePm, onPmSwitch, pmBin, pmArgs, pmFullCmd }: ProspectPageProps) {
  return (
    <>
      <ProspectHero activePm={activePm} onPmSwitch={onPmSwitch} pmBin={pmBin} pmArgs={pmArgs} pmFullCmd={pmFullCmd} />
      <ProspectTrustBar />
      <ProspectFeatures />
      <ProspectShowcase />
      <ProspectQuickstart activePm={activePm} onPmSwitch={onPmSwitch} pmBin={pmBin} pmArgs={pmArgs} />
    </>
  );
}
