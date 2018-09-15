# TODO

## Components

- [ ] Signup mechanism.

## Scenes

- [ ] Layout for public page.
- [ ] User's profile
- [ ] Check auth on each protected route access.

## Pages (routes)

```
/
/signup
/login
/admin
    /
    /templates
        /
        /new
        /trash
    /inputs
        /
        /new
        /trash
    /profile
```

## AntDesign Form maker

```javascript
const form = {
  onSubmit: (err, values) => {
    if (!err) {
      /* Submit here! */
    }
  },
  submitButton: <Button>Submit</Button> // Automatically add onClick event handler (onSubmit)
};
```
