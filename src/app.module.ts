import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './event.entity';
import { EventsController } from './events.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:example@localhost/nest-events',
      entities: [Event],
      synchronize: true,
    }),
  ],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
