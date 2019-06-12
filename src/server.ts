import * as Koa from 'koa';
import * as Send from 'koa-send';
import * as Router from 'koa-router';
import * as Serve from 'koa-static';

const port = process.env.PORT || 3000;
const app = new Koa();
const router = new Router();

app.use(Serve(`${__dirname}/frontend`));
app.use(router.routes());

app.listen(port);

app.use(function* index(): any {
  yield Send(this, '../src/frontend/index.html');
});

console.log(`Listening on port ${port}`);
