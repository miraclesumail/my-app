import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { TestChildOneComponent } from './test-one/test1.component';
import { TestChildTwoComponent } from './test-two/test2.component';
import { TestRouting } from './test.routing';

@NgModule({
  imports: [TestRouting],
  declarations: [TestComponent,TestChildOneComponent,TestChildTwoComponent]
})
export class TestModule {}