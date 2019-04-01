// @flow

import _PaymentRequest from "./PaymentRequest";
import { PKPaymentButton } from "./PKPaymentButton";
import _PaymentRequestUpdateEvent from "./PaymentRequestUpdateEvent";

export const ApplePayButton = PKPaymentButton;
export const PaymentRequest = _PaymentRequest;
export const PaymentRequestUpdateEvent = _PaymentRequestUpdateEvent;
