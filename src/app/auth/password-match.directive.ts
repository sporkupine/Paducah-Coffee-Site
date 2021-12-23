import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

import { mustMatch } from './password-match.validator';

@Directive({
  selector: '[mustMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true,
    },
  ],
})
export class PasswordMatchDirective implements Validator {
  @Input('mustMatch') mustMatch: string[] = []
  constructor() {}

  validate(formGroup: FormGroup): ValidationErrors | null {
    return mustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup)
  }
}
