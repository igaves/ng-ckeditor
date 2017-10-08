# angular ckeditor module

install:

`npm install ig-ng-ckeditor`

usage:
ts
```typescript
  import {NgCkeditorModule} from 'ig-ng-ckeditor';

  @Module({
    imports:[
      NgCkeditorModule
    ]
  })
```
template

```html
  <ng-ckeditor name="content" [(ngModule)]="article.content"></ng-ckeditor>
```
or 
```html
  <ng-ckeditor formControlName="content"></ng-ckeditor>
```

