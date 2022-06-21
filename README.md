1. npm ci
2. create .env file on the root
   Will need the following variables:

CI=1 <br />
ENVIROMENT_URL=https://dev.trutik.io <br />
ENVIROMENT_USERNAME= <br />
ENVIROMENT_PASSWORD= <br />

ADMIN_TENANT_IMPERSONATE=ENVIROTECHNWENVIROTECHNWCarrier 1/3/2022
ADMIN_TENANT_IMPERSONATE_USER=Useradmin admin (ENVIROTECHNW@trutik.com)

3. npx playwright test login-test.spec.ts --headed
