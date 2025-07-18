import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [AuthModule, PrismaModule,ConfigModule.forRoot({isGlobal:true}), ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
