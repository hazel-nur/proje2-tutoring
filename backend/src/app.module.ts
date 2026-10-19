import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';

export const { ObserveModule, ObserveInstrument } = createObserveModule({
  // config burada kalıyor, dokunmuyoruz
});

@Module({
  imports: [
    AuthModule,
    // Distributed tracing, auto-correlated logs, request/j...
    // telemetry, alarms, and more — out of the box.
    // sign u...
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'backend',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}