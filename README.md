How to run:

1. run npm ci on root folder
2. create a .env file on the root
   You will need the following vairables:

   sample:  
      CI=1
      ENVIROMENT_URL==https://dev.trutik.io
| Key  | Value |
| --------  | -------- |
| CI=      | 1 |
| ENVIROMENT_URL=      |  |
| ENVIROMENT_USERNAME=      |  |
| ENVIROMENT_PASSWORD=     |  |
| ADMIN_TENANT_IMPERSONATE=     |  |
| ADMIN_TENANT_IMPERSONATE_USER=     |  |

3. npx playwright test login-test.spec.ts --headed
