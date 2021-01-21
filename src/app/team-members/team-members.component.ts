import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { OurTeam } from './domain';
import { TeamMembersService } from './infrastructure/team-members.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  ourTeams$: Observable<Array<OurTeam>>;

  constructor(private readonly _teamMembersService: TeamMembersService) {}

  ngOnInit(): void {
    this.ourTeams$ = this._teamMembersService.getOurTeams();
  }
}
