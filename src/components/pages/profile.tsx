import React, { useState } from "react";
import ProfileUnverified from "../ui/profileUnverified";
import ProfileVerified from "../ui/profileVerified";
import VerifyAccountForm from "../pages/verifyAccount";

export default function Profile({ icon }: { icon: string }) {
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);

  if (verifying) {
    return <VerifyAccountForm onVerify={() => {
      setVerifying(false);
      setVerified(true);
    }} />;
  }

  return verified ? (
    <ProfileVerified icon={icon} />
  ) : (
    <ProfileUnverified icon={icon} onStartVerification={() => setVerifying(true)} />
  );
}
