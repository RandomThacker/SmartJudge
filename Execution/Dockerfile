FROM alpine:latest

RUN apk update

RUN apk add nodejs python3 g++ gcc openjdk17

WORKDIR /app

COPY ./files ./app

COPY ./execfile.sh /app/

ENV lang="none"

RUN chmod +X execfile.sh

CMD [ "sh","./execfile.sh"  ]
