# Testing ability to build a wedding website

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
- Settingup an Express app
```
npm install ejs express --save
```
