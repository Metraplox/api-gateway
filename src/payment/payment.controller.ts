import { Controller, Post } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { PaymentMSG } from 'src/common/constants';
import { ClientProxyApp } from 'src/common/proxy/client-proxy';
import {
  CheckTransactionDto,
  ConfirmationDto,
  PaymentDto,
} from './dto/payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly clientProxy: ClientProxyApp) {}
  private _clientProxyPayment = this.clientProxy.clientProxyPayment();

  @Post('create')
  createPayment(@Payload() createPaymentInput: PaymentDto): Observable<any> {
    return this._clientProxyPayment.send(PaymentMSG.TRANSACTION, {
      ...createPaymentInput,
    });
  }

  @Post('confirm')
  async confirmPayment(
    @Payload() confirmPaymentInput: ConfirmationDto,
  ): Promise<any> {
    return await firstValueFrom(
      this._clientProxyPayment.send(PaymentMSG.CONFIRM_PAYMENT, {
        ...confirmPaymentInput,
      }),
    );
  }

  @Post('check')
  async checkPayment(
    @Payload() checkPaymentInput: CheckTransactionDto,
  ): Promise<any> {
    return await firstValueFrom(
      this._clientProxyPayment.send(PaymentMSG.CHECK_TRANSACTION, {
        ...checkPaymentInput,
      }),
    );
  }
}
