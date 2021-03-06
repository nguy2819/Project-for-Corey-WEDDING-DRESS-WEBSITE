# Testing ability to build a wedding website
![screen shot 2018-10-19 at 10 46 32 am](https://user-images.githubusercontent.com/36870689/47232344-a90ec600-d38c-11e8-8a7b-8f2907dc07e7.png)
![screen shot 2018-10-19 at 10 48 02 am](https://user-images.githubusercontent.com/36870689/47232370-bcba2c80-d38c-11e8-83bc-b8df04074596.png)

- [x] Accordion sidebar
- [x] Responsive Header with header-right for phone number, Sign Up and Log In function
- [ ] Need to work on Authorization (Sign Up and Log In)
- Used fontawesome for icon - check out [fontawesome website](https://fontawesome.com/icons/shopping-cart?style=solid) here
- Added hover with [styled-components](https://github.com/styled-components/styled-elements)
```
const NavigationStyle = styled.a`
    margin: 0;
    text-align: center;
    margin-bottom: 10px;
    text-decoration: none;
    &:hover {
        background: green;
        color: white;
      }
`
```
- Check out [CSS-grid](https://css-tricks.com/snippets/css/complete-guide-grid/) for more learning.
- Also, [override link style inside an html div](https://stackoverflow.com/questions/19363343/override-link-style-inside-an-html-div) is a new thing to learn more that we applied this technique in Navigation.js
```
const NavSpan = styled.span`
    margin-bottom: 10px;
    a {color: black;}
    &:hover {
        background: green;
        border-radius: 10px;
        a { color: white; }
        // transform: scale(1.5, 1.25); //make the navigation bar pop out bigger
        box-shadow: 5px 5px 5px #888;
}
`;
```
- This part is a special part for toggling a button to optical illusion, i.e. make two separate elements look like one
```
{this.state.currentTab === 'book' 
                        ? <SelectedButton> Book an Appointment </SelectedButton>
                        : <SyledButton onClick={e => this.onTabChange('book')}> Book an Appointment </SyledButton>}
```
- Settingup an Express app
```
npm install ejs express --save
```
