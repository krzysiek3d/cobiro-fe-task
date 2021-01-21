export class BlockInfo {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly link: string,
    public readonly text: string
  ) {}
}

export class ImageUrlTypes {
  constructor(
    public readonly w200: string,
    public readonly w400: string,
    public readonly w1080: string,
    public readonly w1920: string,
    public readonly w2560: string
  ) {}
}

export class TeamMemberCard {
  constructor(
    public readonly imageUrl: ImageUrlTypes,
    public readonly block: BlockInfo
  ) {}
}

export class TeamMembersCardsBackend {
  constructor(
    public readonly first: TeamMemberCard,
    public readonly second: TeamMemberCard,
    public readonly third: TeamMemberCard
  ) {}
}

export class TeamMembersAttributesBackend {
  constructor(
    public readonly title: string,
    public readonly memberCards: TeamMembersCardsBackend
  ) {}
}

export class TeamMembersBackend {
  constructor(
    public readonly type: string,
    public readonly id: string,
    public readonly attributes: TeamMembersAttributesBackend
  ) {}
}

export class TeamMembersBackendData {
  constructor(public readonly data: Array<TeamMembersBackend>) {}
}
