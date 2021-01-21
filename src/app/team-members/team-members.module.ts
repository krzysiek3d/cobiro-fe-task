import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from '../ui/card/card.module';
import { TeamMembersComponent } from './team-members.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, CardModule],
  declarations: [TeamMembersComponent],
  exports: [TeamMembersComponent]
})
export class TeamMembersModule {}
