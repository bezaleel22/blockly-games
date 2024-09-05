import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static';

const app = new Elysia()
app.use(staticPlugin({
  prefix: '',
  assets: "./public",
}))

app.get('/', async () => {
  return Bun.file('./public/index.html')
})

app.listen(3001, () => {
  console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
})