import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
