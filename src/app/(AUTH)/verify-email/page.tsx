import { Suspense } from "react";
import AuthLayout from "../components/AuthLayout";
import VerificationForm from "./components/VerificationForm";

export default function VerifyEmailPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="text-sm text-muted">Loading...</div>}>
        <VerificationForm />
      </Suspense>
    </AuthLayout>
  );
}
