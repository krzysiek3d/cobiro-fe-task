import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  TeamMembersBackendData,
  TeamMembersBackend,
  TeamMemberCard,
  OurTeam,
  Member
} from '../domain';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  private readonly _hostUrl: string =
    'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json';

  constructor(private readonly _http: HttpClient) {}

  getTeamMembersData(): Observable<Array<TeamMembersBackend>> {
    return this._http
      .get<TeamMembersBackendData>(this._hostUrl)
      .pipe(map((res: TeamMembersBackendData) => res.data));
  }

  getOurTeams(): Observable<Array<OurTeam>> {
    return this.getTeamMembersData().pipe(
      map(teamMembers => this._mapBackendToFrontend(teamMembers))
    );
  }

  private _mapBackendToFrontend(
    data: Array<TeamMembersBackend>
  ): Array<OurTeam> {
    return data.map(teamMember => {
      const title = teamMember.attributes.title;

      const memberCardsArray: Array<TeamMemberCard> = Object.values(
        teamMember.attributes.memberCards
      );
      const members: Array<Member> = memberCardsArray.map(
        ({ imageUrl, block }) => {
          return {
            avatar: imageUrl.w200,
            title: block.title,
            subtitle: block.description,
            email: block.link,
            phone: block.text
          };
        }
      );

      return { title, members };
    });
  }
}
