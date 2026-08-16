FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY Portfolio/Portfolio.csproj Portfolio/

RUN dotnet restore "Portfolio/Portfolio.csproj"

COPY Portfolio/ Portfolio/

RUN dotnet publish "Portfolio/Portfolio.csproj" \
    -c Release \
    -o /app/publish \
    --no-restore


FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://0.0.0.0:10000

EXPOSE 10000

ENTRYPOINT ["dotnet", "Portfolio.dll"]
