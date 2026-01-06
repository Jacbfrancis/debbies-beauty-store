import CheckOutForm from "../components/CheckOutForm";
import MobileOrderSummary from "../components/MobileOrderSummary";

function CheckOutPage() {
  return (
    <div>
      <MobileOrderSummary />
      <CheckOutForm />
      <MobileOrderSummary />
    </div>
  );
}

export default CheckOutPage;
