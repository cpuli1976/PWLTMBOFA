import { Page, Locator } from '@playwright/test'
export class LoginPage {

    private readonly page: Page;
    private readonly Username: Locator;
    private readonly Password: Locator;
    private readonly SubmitButton: Locator;
    private readonly successmessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Username = page.getByLabel("Username");
        this.Password = page.getByLabel("Password");
        this.SubmitButton = page.getByRole('button', { name: 'Submit' });
        this.successmessage = page.getByText("Logged In Successfully");

    }

    async login(username: string,password: string){

        await this.Username.fill('Username');
        await this.Password.fill('Password');
        await this.SubmitButton.click();

    }
    async getSuccessmessage(){
        return this.successmessage;
    }

}