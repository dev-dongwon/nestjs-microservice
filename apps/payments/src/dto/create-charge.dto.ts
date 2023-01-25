import { IsDefined, IsNumber } from 'class-validator';
import Stripe from 'stripe';

export class CreateChargeDto {
  card: Stripe.PaymentMethodCreateParams.Card1;

  @IsNumber()
  amount: number;
}
