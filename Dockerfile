FROM denoland/deno:1.30.0

WORKDIR /app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache main.ts

CMD [ "deno", "task", "dev" ]
