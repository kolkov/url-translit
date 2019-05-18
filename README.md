# UrlTranslit

Text to URL transliteration util.

## Installation

via npm

```
npm install @kolkov/url-translit
```

## Example

```typescript
import {translit} from "@kolkov/url-translit";
```

and then in code for example in Angular component

```typescript
 updatePath() {
    const pathValue = this.form.get("path").value;
    if (pathValue === '') {
      const value = this.form.get("title").value;
      const urlPathValue = translit(value);
      this.form.patchValue({"path": urlPathValue});
    }
  }
```

## License

MIT

## Generator

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0-rc.4.

