import { PropsPage } from "@/common/interfaces/PropsPage";
import { FormValue } from "@/components/FormValue";

interface Props extends PropsPage {}

export default function Page() {
  
  return (
    <main className="flex min-h-screen">
      <FormValue />
    </main>
  );
}
