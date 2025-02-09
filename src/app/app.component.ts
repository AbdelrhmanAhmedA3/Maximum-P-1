import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // syntax angular love
//  accessing controls in angular reactiveForm
  private readonly _fb = inject(NonNullableFormBuilder);
  contactUsForm = new FormGroup({
    projectId: new FormArray([
    new FormControl(''),
    ]),

  })

  readonly form = this._fb.group({
    fruits: this._fb.array([this._fb.control('apple')])
  });

  // this way true syntax
  addFruitsTrue(){
    const fruits = this.form.controls.fruits;
    const dd = this.contactUsForm.controls.projectId;
    fruits.push(this._fb.control('banana'));
    dd.push(this._fb.control('banana'));
  }

  // this way false syntax
  addFruitsFalse(){
    const fruits = this.form.get('fruits');
    (fruits as FormArray).push(this._fb.control('banana'));
  }

}
