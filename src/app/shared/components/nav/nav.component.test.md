# Issue E/6 Shared Navigation

- `it should create` Test that the test bed and component can be initialized properly
- `it should render login/logout link` Test that the login/logout element is rendered regardless of users
- `it should render logout when user is logged in` Test that 'Logout' is rendered when the user is logged in. The default test state sets a users
- `it should render login when user is not logged in` Test that 'Login' is rendered when the user is not logged in. The default state is overridden in the test to set 'user' to null.
- `it should render the correct number of tabs` Tabs change as the user does. Test that the correct number of tabs are rendered by the tabs returned by the store.
