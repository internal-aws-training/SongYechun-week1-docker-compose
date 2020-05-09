FROM openjdk:11-jdk AS builder
COPY . /source
WORKDIR /source
RUN ./gradlew bootJar

FROM openjdk:11-jdk
COPY --from=builder /source/build/libs/demo-0.0.1-SNAPSHOT.jar /app/
WORKDIR /app

EXPOSE 8080

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app/demo-0.0.1-SNAPSHOT.jar"]
