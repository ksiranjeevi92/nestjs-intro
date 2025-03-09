FROM postgres:16

ENV POSTGRES_DB=nestjs_users
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=password

EXPOSE 5432

#CMD ["postgres"]
