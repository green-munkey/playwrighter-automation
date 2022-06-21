1. npm ci
2. create .env file on the root
   Will need the following variables:

| Key  | Value |
| --------  | -------- |
| CI=      | 1 |
| ENVIROMENT_URL=      |  |
| ENVIROMENT_USERNAME=      |  |
| ENVIROMENT_PASSWORD=     |  |
| ADMIN_TENANT_IMPERSONATE=     |  |
| ADMIN_TENANT_IMPERSONATE_USER=     |  |

3. npx playwright test login-test.spec.ts --headed
