import { expect, test, TestInfo } from "@playwright/test"
import { LoginPage } from "../pages/login-page"
import { HostTenant } from "../pages/host/host-tenants"
import { TenantDashboard } from "../pages/carrier/tenant-carrier-dasboard";
import { TenantOrder } from "../pages/carrier/tenant-carrier-order";

require('dotenv').config();

test.describe("Run basic E2E TruTik App site ", async () => {

    test("Login as a Tenant and click every link", async ({ page, isMobile }, testInfo) => {


        // sign in as super admin
        const loginPage = new LoginPage(page, process.env.ENVIROMENT_URL, process.env.ENVIROMENT_USERNAME, process.env.ENVIROMENT_PASSWORD);
        await loginPage.GoToLoginPage();
        await loginPage.FillLogin(testInfo);
        await loginPage.ClickLogin(testInfo);


        // log onto a tenant
        const hostTenant = new HostTenant(page, process.env.ADMIN_TENANT_IMPERSONATE, process.env.ADMIN_TENANT_IMPERSONATE_USER);
        await hostTenant.HostDashboardLoaded(testInfo);
        await hostTenant.ImpersonateTenant(testInfo);
        await hostTenant.LoginAsUser(testInfo);


        // tenant dashboard
        const tenantDashboard = new TenantDashboard(page);
        await tenantDashboard.DashboardExists(testInfo);

        const tenantOrder = new TenantOrder(page, process.env.ENVIROMENT_URL);
        await tenantOrder.OrderPageExists(testInfo);
        //await tenantOrder.ClickOnText(testInfo, "Dashboard");
        await tenantOrder.ClickOnText(testInfo, "Orders");
        //await tenantOrder.ClickOnText(testInfo, "000001");

    });

});