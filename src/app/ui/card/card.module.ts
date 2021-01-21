import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import * as fromDirectives from './directives';

@NgModule({
  declarations: [...fromComponents.components, ...fromDirectives.directives],
  imports: [CommonModule],
  exports: [...fromComponents.components, ...fromDirectives.directives]
})
export class CardModule {}
