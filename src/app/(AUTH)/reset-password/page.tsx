import { Suspense } from "react";
import AuthLayout from "../components/AuthLayout";
import ResetPasswordForm from "./components/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="text-sm text-muted">Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}
