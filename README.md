# Route

Javascript route matching in 50 lines

## Usage

Check routes against a number of predefined regex placeholders, and return the callback with matches applied as arguments

#### Simple route

```javascript
route('/testing', function() {
  // Fired if route matches the given string
});
```

#### With Placeholders

```javascript
// Fire /testing/32
route('/testing/{num}', function(id) {
  console.log(id);
  // 32
});
```

###### Available placeholders

```yaml
num:      An integer of any length
alpha:    Matches on the letters a-z. Case insensitive
slug:     A url-safe slug string. e.g. this-is-the-slug
domain:   Matches domains with optional subdomain. e.g. molovo.wilde.io
```

#### Custom Regex

```javascript
// Fire /testing/ABC
route('/testing/([A-Z]+)', function(abbr) {
  console.log(abbr);
  // ABC
});
```
