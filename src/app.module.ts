import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: ['dist/src/**/*.entity.js'],
      synchronize: true, // set to FALSE in Production
      migrations: ['dist/src/persistence/migrations/*.js'],
      // cli: {
      //   migrationsDir: 'dist/src/persistence/migrations'
      // }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
