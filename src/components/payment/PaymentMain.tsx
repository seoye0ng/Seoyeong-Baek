import PaymentList from './PaymentList';
import ShippingInfoForm from './ShippingInfoForm';
import PaymentMethod from './PaymentMethod';
import FinalPaymentInfo from './FinalPaymentInfo';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function PaymentMain() {
  const location = useLocation();
  const { state } = location; // state 추출

  // state에서 orderList와 totalMoney 추출
  const { orderListId, finalPrice, orderListQuantity } = state;

  return (
    <SMainLayout>
      <PaymentList orderListId={orderListId} finalPrice={finalPrice} orderListQuantity={orderListQuantity} />
      <form action="">
        <ShippingInfoForm />
        <div className="payment-wrapper">
          <PaymentMethod />
          <FinalPaymentInfo />
        </div>
      </form>
    </SMainLayout>
  );
}

const SMainLayout = styled.main`
  max-width: 80rem;
  margin: 0 auto 200px;

  h3 {
    font-size: 1.5rem;
    padding-bottom: 1.125rem;
  }

  .payment-wrapper {
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
  }
`;
