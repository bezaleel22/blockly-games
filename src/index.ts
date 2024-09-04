import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static';

const app = new Elysia()
app.use(staticPlugin({
  prefix: '',
  assets: "./public",
}))

app.get('/', async () => {
  return Bun.file('./public/index.html?lang=en')
})

app.listen(3000, () => {
  console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
})