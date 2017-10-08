import {
  AfterContentInit, Component, ContentChild, Directive, ElementRef, forwardRef, Input
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export const EDITOR_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgCkeditorComponent),
  multi: true
};

@Component({
  selector: 'ng-ckeditor',
  templateUrl: './ng-ckeditor.component.html',
  providers: [EDITOR_ACCESSOR],
  styleUrls: ['./ng-ckeditor.component.scss']
})
export class NgCkeditorComponent implements AfterContentInit, ControlValueAccessor {

  @Input() path: string = "https://cdn.ckeditor.com/4.7.3/standard/ckeditor.js";

  _value: string = '';

  constructor(public element: ElementRef) {
  }

  ngAfterContentInit(): void {
    let nativeDom = this.element.nativeElement.querySelector('textarea');

    let id = 'ckeditor_' + Math.abs(Math.random() * 10000);
    nativeDom.setAttribute('id', id);

    let script = document.querySelector('ckeditor_script');
    if (!script) {
      script = document.createElement('script');
      script.id = 'ckeditor_script';
      script.setAttribute('src', this.path);
      document.head.appendChild(script);
      let editor = null;
      script.addEventListener('load', () => {
        editor = window['CKEDITOR'].replace(id);
        editor.on('change', (evt) => {
          this.onChange(evt.editor.getData());
        })
      });
    }
  }


  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(v: any): void {
    if(v){
      this._value = v;
      this.onChange(v);
    }
  }

  onChange = (_: any) => {
  };
  onTouched = () => {
  };

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
