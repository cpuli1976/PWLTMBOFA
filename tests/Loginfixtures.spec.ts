import{test,expect} from'../fixtures/Loginpage';


test ('Login fixture', async({logInPage})=>{

    await expect(logInPage.getByText('Logged In Successfully')).toBeVisible();

})