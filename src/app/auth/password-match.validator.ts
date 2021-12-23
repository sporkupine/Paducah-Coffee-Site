import { FormGroup } from '@angular/forms';

export function mustMatch(controlName: string, matchingControlName: string) {
  return (authForm: FormGroup) => {
    const control = authForm.controls.password;
    const matchingControl = authForm.controls.passwordConfirm;

    if (!control || !matchingControl) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
