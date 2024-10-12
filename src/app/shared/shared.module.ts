import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DecreaseTextPipe } from 'src/app/pipe/decrease-text.pipe';
import { AlphaNumericDirective } from '../directives/alpha-numeric.directive';
import { CaseSensitiveDirective } from '../directives/casesensitive.directive';
import { SafeHtmlPipe } from '../pipe/safeHtml.pipe';
import { TimeFormaterPipe } from '../pipe/time-formater.pipe';


@NgModule({
  declarations: [AlphaNumericDirective, SafeHtmlPipe, TimeFormaterPipe, DecreaseTextPipe, CaseSensitiveDirective,],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule

  ],
  exports: [AlphaNumericDirective, CaseSensitiveDirective, SafeHtmlPipe, TimeFormaterPipe, DecreaseTextPipe, NgSelectModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }